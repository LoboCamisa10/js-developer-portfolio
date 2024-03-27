async function FetchProfileData(){
        const url = 'https://raw.githubusercontent.com/LoboCamisa10/js-developer-portfolio/master/src/data/profile.json';
        const fetching = await fetch(url)
        return await fetching.json()
}