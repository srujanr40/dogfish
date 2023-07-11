const Profile = require('../models/profileModel');

const profileQueries = {
    getProfile: async function (name) {
        let profile = await Profile.findOne({ name: name });
        if (profile === null) {
            profile = {
                name: '',
                equipment: [],
                interests: [],
                location: '',
                image: ''
            }
        }
        return profile;
    },
    addProfile: async function (profile) {
        const newProfile = new Profile({
            name: profile.name,
            equipment: profile.equipment,
            interests: profile.interests,
            location: profile.location,
            image: profile.image
        });
        newProfile.save()
            .then((savedProfile) => {
                console.log('Profile saved:', savedProfile);
            })
            .catch((error) => {
                console.error('Error saving profile:', error);
            })
    },
    updateProfile: async function (profile) {
        Profile.findOneAndUpdate(
            { name: profile.storedName },
            { name: profile.name, equipment: profile.equipment, interests: profile.interests, location: profile.location, image: profile.image },
            { new: true })
            .then((updatedProfile) => {
                console.log('Profile updated:', updatedProfile);
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
            });
    },
    deleteProfile: async function (name) {
        Profile.findOneAndDelete({ name: name })
            .then((deletedProfile) => {
                console.log('Profile deleted:', deletedProfile);
            })
            .catch((error) => {
                console.error('Error deleting profile:', error);
            });
    }
}


module.exports = profileQueries;