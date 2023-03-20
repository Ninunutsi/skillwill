//Lecture 10

// Task1 

function timeout(delayMs){
    return new Promise(resolve => setTimeout(resolve, delayMs))
}
timeout(1000).then(() => console.log('hello'))

// Task 2
//Method 1

function getFacebookProfile(){
    return new Promise(() => {})
}

getFacebookProfile(1)
    .then((profile) => getFacebookProfile(profile.friends[0].id))
    .then((friendProfile) => getFacebookProfile(friendProfile.friends[0].id))
    .then((friendsFriend) => getFacebookProfile(friendsFriend.friends[0].id))
    .then((finalProfile) => getFacebookProfile(finalProfile.friends[0].id))
    .then(console.log('Finally, I have all the profiles'))

// Method 2

async function getAllProfiles(){
    try{
        await getFacebookProfile(1)
        await getFacebookProfile(profile)
        await getFacebookProfile(friendProfile)
        await getFacebookProfile(friendsFriend)
        await getFacebookProfile(finalProfile)
        
    }catch(err){
        console.log('something is not okay')
    }
    console.log('Finally, I have all the profiles')
}

// getAllProfiles()