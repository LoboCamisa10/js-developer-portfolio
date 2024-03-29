function updateProfilePhoto(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name
    
    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText  = profileData.location
    
}

function updateSoftSkills(profileData){

    const softSkills = document.getElementById('profile.softskills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => {
       return `<li>${skill}</li>`} ).join('')
}

function updateHardSkills(profileData){

    const HardSkills = document.getElementById('profile.hardskills')
    HardSkills.innerHTML = profileData.skills.hardSkills.map(skill => {
        return `<img src="${skill.logo}" alt="${skill.name}-img" title="${skill.name}-img">`}).join('')
}

(async () => {

    const profileData = await FetchProfileData()
    updateProfilePhoto(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    
})()