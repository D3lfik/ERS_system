const Users = require('../models/user');

module.exports.assignWork = async (req, res) => {
  try {
    let employe = await Users.find({});
    return res.render('admin', {
      title: 'ERS | Assign Work',
      employe: employe
    });
  } catch (err) {
    console.log("Error in assigning work: " + err);
    return res.redirect('/');
  }
};

module.exports.showEmployeeList = async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      req.flash('error', 'You are not Authorized !');
      return res.redirect('/users/sign-in');
    }
    if (req.user.isAdmin === false) {
      req.flash('error', 'You are not Authorized');
      return res.redirect('/');
    }
    let employeList = await Users.find({});
    return res.render('employee', {
      title: "ERS | Employe-List",
      employes: employeList
    });
  } catch (err) {
    console.log("Error in showing employee list: " + err);
    return res.redirect('/');
  }
};

module.exports.setReviewrAndReviewe = async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      req.flash('success', 'Please Login !');
      return res.redirect('/users/sign-in');
    } else {
      let employee = await Users.findById(req.user.id);
      if (employee.isAdmin === false) {
        req.flash('error', 'Opps ! Not Authorized ');
        return res.redirect('/users/sign-in');
      } else if (req.body.sender == req.body.reciver) {
        req.flash('error', 'Sender and receiver should not be the same !');
        return res.redirect('back');
      } else {
        let sender = await Users.findById(req.body.sender);
        let reciver = await Users.findById(req.body.reciver);
        sender.userToReview.push(reciver);
        sender.save();
        reciver.reviewRecivedFrom.push(sender);
        reciver.save();
        req.flash('success', 'Task Assigned !');
        return res.redirect('back');
      }
    }
  } catch (err) {
    console.log("Error in setting up the user: " + err);
    return res.redirect('back');
  }
};

module.exports.newAdmin = async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      req.flash("success", 'Please LogIn !');
      return res.redirect('/users/sign-in');
    }
    if (req.user.isAdmin === false) {
      req.flash('error', 'You are not Admin !');
      return res.redirect('/');
    }
    if (req.user.isAdmin) {
      let user = await Users.findById(req.body.selectedUser);
      if (!user) {
        return res.redirect('back');
      }
      req.flash('success', 'New Admin Added');
      user.isAdmin = "true";
      user.save();
      return res.redirect('back');
    }
  } catch (err) {
    console.log(err);
    return res.redirect('back');
  }
};

module.exports.deleteEmployee = async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      req.flash('error', 'Please Login !')
      return res.redirect('users/sign-in');
    }
    if (!req.user.isAdmin) {
      req.flash('error', 'You are not admin !')
      return res.redirect('/');
    }
    await Users.deleteOne({ _id: req.params.id });
    req.flash('success', 'User Deleted!')
    return res.redirect('back');
  } catch (err) {
    console.log(err);
    return res.redirect('back');
  }
};

module.exports.addEmployee = (req, res) => {
  return res.render('addEmployee', {
    title: 'ERS | Add Employee'
  });
};
