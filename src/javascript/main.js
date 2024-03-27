function updateProfilePhoto(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('phofile.name')
    name.innerText = profileData.name
    
    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

}

function updateProfileName(profileData){
    
}

(async ()=>{
    const profileData = await FetchProfileData()
    console.log(profileData)
})()