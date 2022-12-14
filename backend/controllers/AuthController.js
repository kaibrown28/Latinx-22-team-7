import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../connection/db.js'
import { awsUserPool } from '../util/awsUserPool';

export const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (request, response) => {
        const { email, password } = req.body;

        const attributes = [
            new CognitoUserAttribute({ Name: 'email', Value: email }),
        ];

        awsUserPool.signUp(email, password, attributes, null, async (error, awsResult) => {
            if (error) {
                console.log(error);
                return response.status(500).json({ message: 'Unable to sign up user' });
            }

            const db = getDbConnection(process.env.DATABASE);

            const startingInfo = {
                firstName:'',
                lastName:'',
                school:'',
            };

            const result = await db.collection('users').insertOne({
                email,
                info: startingInfo,
            });
            const { insertedId } = result;

            jwt.sign({
                id: insertedId,
                isVerified: false,
                email,
                info: startingInfo,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d',
            },
            (error, token) => {
                if (error) return response.sendStatus(500);
                response.status(200).json({ token });
            })
        });
    }
}


export const logInRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (request, response) => {
        const { email, password } = request.body;

        const db = getDbConnection('react-auth-db');
        const user = await db.collection('users').findOne({ email });

        if (!user) return response.sendStatus(401);

        const { _id: id, isVerified, passwordHash, info } = user;

        const isCorrect = await bcrypt.compare(password, passwordHash);

        if (isCorrect) {
            jwt.sign({ id, isVerified, email, info }, process.env.JWT_SECRET, { expiresIn: '2d' }, (error, token) => {
                if (err) {
                    res.status(500).json(error);
                }

                response.status(200).json({ token });
            });
        } else {
            response.sendStatus(401);
        }
    },
}