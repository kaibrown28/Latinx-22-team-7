exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.studentHome = (req, res) => {
    res.status(200).send("Student Content.");
  };
  
  exports.companyHome = (req, res) => {
    res.status(200).send("Company Content.");
  };
  
  exports.adminHome = (req, res) => {
    res.status(200).send("Admin Content.");
  };