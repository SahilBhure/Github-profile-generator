const userNameInput = document.querySelector('#userName');
const showDetailsButton = document.querySelector('#showDetails');
const profileInfoDiv = document.querySelector('#profileInfo');
const repoInfoDiv = document.querySelector('#repoInfo');
/*
function showRepoInfo(userName){
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then((res) => res.json())
    .then((projects) =>{
        console.log(projects)
        for(let i = 0; i <projects.length;i++){
        repoInfoDiv.innerHTML +=`<div class="card">
        <div class="card-body">
            <div class="card-title">${projects[i].name}</div>
            <div class="language">${projects[i].language}</div>
            <div class="card-text">
            <button>
                <a href = ${projects[i].html_url}>
                Do check it out!
                </a>
            </button>
            </div>
        </div>
    </div>`
    }
    })
}*/
/*
showDetailsButton.addEventListener('click',() =>{
    const userName = userNameInput.value;
    
    //fetch api
    fetch(`https://api.github.com/users/${userName}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            profileInfoDiv.innerHTML = ` <div class="card">
                                    <div class="card-Img">
                                        <img src="${data.avatar_url}" alt="${data.name}">
                                    </div>
                                    <div class="card-body">
                                        <div class="card-title">${data.name}</div>
                                        <div class="card-subHeading">${data.login}</div>
                                        <div class="card-text">
                                        <p>${data.bio}</p>
                                        <p>${data.followers} followers ${data.following} following</p>
                                        </div>
                                    </div>
                                </div>`


                showRepoInfo(userName);                
        });


});
*/
    /** promises it can be resolved,rejected or pending
    const p = new Promise((resolve,reject) =>{
        const x = 1 + 5;
        if( x == 2){
            resolve('success');

        }else{
            reject('failed');
        }
    })


    * then will be executed when promise resolved , otherwise catch will be executed
        p.then((data) => console.log(data)).catch((err) => console.log(err));
    **/

    //async and await
    showDetailsButton.addEventListener('click', async () => {
        const userName = userNameInput.value;
        //fetch api
        const res = await fetch(`https://api.github.com/users/${userName}`);
            const data = await res.json();
            showProfile(data);
            showReposInfo(userName);
            });

    function showProfile(data){
                    profileInfoDiv.innerHTML = ` <div class="card">
                                            <div class="card-Img">
                                                <img src="${data.avatar_url}" alt="${data.name}" id="Imgpic">
                                            </div>
                                            <div class="card-body">
                                                <div class="card-title">${data.name}</div>
                                                <div class="card-subHeading">${data.login}</div>
                                                <div class="card-text">
                                                <p>${data.bio}</p>
                                                <p>${data.followers} followers ${data.following} following</p>
                                                </div>
                                            </div>
                                        </div>`                
                             }
    
    async function showReposInfo(userName){
      const res = await fetch(`https://api.github.com/users/${userName}/repos`)
      const projects = await res.json(); 
      for(let i = 0;i < projects.length;i++){
      repoInfoDiv.innerHTML +=`<div class="card_repo">
                                <div class="card-body-repo">
                                    <div class="card-title">${projects[i].name}</div>
                                    <div class="language">${projects[i].language}</div>
                                    <div class="card-text">
                                    <button>
                                        <a href = ${projects[i].html_url}>
                                        Do check it out!
                                        </a>
                                    </button>
                                    </div>
                                </div>
                            </div>`
    }}



























