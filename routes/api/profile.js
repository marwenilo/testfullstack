const express =require('express');
const request =  require ('request');
const config =  require ('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');
const { check, validationResult } = require('express-validator/');

//@route   GET api/profile/me
//@desc    Get current users profile
//@access  privtae
router.get('/me', auth, async (req, res)=> {

  try{
    const profile = await Profile.findOne({ user: req.user.id}).populate('user',['name','avatar']);
    if(!profile) {
       return res.status(400).json({ msg: 'There is no profile for this user'});
}
    res.json(profile);
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  
});


//@route   POST api/profile/me
//@desc   Create or Update user profile
//@access  privtae

router.post('/', [auth, [
   check('status', 'Status is  required').not().isEmpty(),
    check('countries', 'countries is  required').not().isEmpty()
  ]
], async (req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array()});
  }
 
const{
  location,
  status,
  countries,
  bio,
  
  youtube,
  twitter,
  facebook,
  linkedin,
  instagram
} = req.body;
  
// build profile objict

const profileFields = {};
profileFields.user = req.user.id;
if(location) profileFields.location = location;
if(bio) profileFields.bio = bio;
if(status) profileFields.status = status;
 if (countries) {
   profileFields.countries = countries.split(',').map(country => country.trim());
 }

 // build social object
 profileFields.social={}
 if(youtube) profileFields.social.youtube = youtube;
 if(twitter) profileFields.social.twitter = twitter;
 if(facebook) profileFields.social.facebook = facebook;
 if(linkedin) profileFields.social.linkedin = linkedin;
 if(instagram) profileFields.social.instagram = instagram;

 try{
  let profile = await Profile.findOne({ user: req.user.id});

  if(profile){
    //Update
    profile = await Profile.findOneAndUpdate({ user: req.user.id}, { $set: profileFields},{ new: true}  );
      return res.json(profile);
  }

  //Create
  profile = new Profile(profileFields);
  await profile.save();
  res.json(profile);
  
 } catch(err)
{
  console.error(err.message);
  res.status(500).send('Server Error');
}

});

//@route   GET api/profile
//@desc   Get all profiles
//@access  public

router.get('/', async (req, res)=>{
try {
  const profiles = await Profile.find().populate('user',['name','avatar']);
  res.json(profiles);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
  
}
});
//@route   GET api/profile/user/:user_id
//@desc   Get profile bu user ID
//@access  public

router.get('/user/:user_id', async (req, res)=>{
  try {
    const profile = await Profile.findOne({ user:req.params.user_id}).populate('user',['name','avatar']);

    if(!profile)
    return res.status(400).json({ msg:'Profile not found'})
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if(err.kind == 'ObjectId'){
      return res.status(400).json({ msg:'Profile not found'})
    }
    res.status(500).send('Server Error');
    
  }
  });

  //@route   DELETE api/profile
//@desc      DELETE profile, user and posts
//@access  privet

router.delete('/', auth, async (req, res)=>{
  try {
    //remove users posts
    await Post.deleteMany({ user: req.user.id})

    //remove profile
    await Profile.findOneAndRemove({ user: req.user.id});
//remove User
    await User.findOneAndRemove({ _id: req.user.id});
    res.json({msg: 'User deleted'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
    
  }
  });


//@route   PUT api/profile/experience
//@desc    Add profile experience
//@access  privet
// router.put('/experience', [auth, [
//   check('title', 'Title is required').not().isEmpty(),
//   check('company', 'Company is required').not().isEmpty(),
//   check('from', 'From is required').not().isEmpty()
// ]], async (req, res) => {
//   const errors= validationResult(req);
//   if(!errors.isEmpty()){
//     return res.status(400).json({ errors: errors.array()})
//   }

//   const{
//     title,
//     company,
//     location,
//     from,
//     to,
//     current,
//     description
//   } = req.body;

//   const newExp = {
//     title,
//     company,
//     location,
//     from,
//     to,
//     current,
//     description
//   }

//   try {
//     const profile = await Profile.findOne({ user: req.user.id});
//     profile.experience.unshift(newExp);

//     await profile.save();
//     res.json(profile);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error')
// ;    
//   }
// });
//5d9b69a517cf6a082c26936b
//@route   Delete api/profile/experience//:exp_id
//@desc    Delete experience from profile
// //@access  privet
// router.delete('/experience/:exp_id', auth, async (req, res)=>{
// try {
//   const profile = await Profile.findOne({ user: req.user.id});

//   //Get remove index
//   const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);
//   profile.experience.splice(removeIndex, 1);
//   await profile.save();
//   res.json(profile);
// } catch (err) {
//   console.error(err.message)
//   res.status(500).send('Server Error')
  
// }
// });

//@route   PUT api/profile/education
//@desc    Add profile education
//@access  privet
// router.put('/education', [auth, [
//   check('school', 'School is required').not().isEmpty(),
//   check('degree', 'Degree is required').not().isEmpty(),
//   check('fieldofstudy', 'Field of study is required').not().isEmpty(),
//   check('from', 'From is required').not().isEmpty()
// ]], async (req, res) => {
//   const errors= validationResult(req);
//   if(!errors.isEmpty()){
//     return res.status(400).json({ errors: errors.array()})
//   }

//   const{
//     school,
//     degree,
//     fieldofstudy,
//     from,
//     to,
//     current,
//     description

//   } = req.body;

//   const newEdu = {
//     school,
//     degree,
//     fieldofstudy,
//     from,
//     to,
//     current,
//     description
//   }

//   try {
//     const profile = await Profile.findOne({ user: req.user.id});
//     profile.education.unshift(newEdu);

//     await profile.save();
//     res.json(profile);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error')
// ;    
//   }
// });
//5d9b69a517cf6a082c26936b
//@route   Delete api/profile/education//:edu_id
//@desc    Delete education from profile
// //@access  privet
// router.delete('/education/:edu_id', auth, async (req, res)=>{
// try {
//   const profile = await Profile.findOne({ user: req.user.id});

  //Get remove index
//   const removeIndex = profile.education.map(item => item.id).indexOf(req.params.edu_id);
//   profile.education.splice(removeIndex, 1);
//   await profile.save();
//   res.json(profile);
// } catch (err) {
//   console.error(err.message)
//   res.status(500).send('Server Error')
  
// }
// });

//@route   Get api/profile/gitub//:username
//@desc    Get user repos from Github
//@access  public
// router.get('/github/:username', (req, res)=>{
// try {
//   const options = {
//     uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
//     method: 'GET',
//     headers:{ 'user-agent': 'node.js'}
//   };

//   request(options, (error, response, body)=>{
//     if (error) console.error(error);

//     if (response.statusCode !==200)
//  {
//    return res.status(404).json
// ({ msg: 'No Github profile found'});
//  } 
//  res.json(JSON.parse(body));
//  });
// } catch (err) {
//   console.error(err.message);
//   res.status(500).send('Server Error');
  
// }
// });

module.exports = router;