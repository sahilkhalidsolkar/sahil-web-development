 let github = new GitHub();
 let ui = new UI();
 let searchUser= document.getElementById('searchUser')
 searchUser.addEventListener('keyup',(e)=>{
    let searchText= e.target.value;
    if(searchText != ""){
        github.getUser(searchText)
        .then(result=> {
            console.log(result)
            if(result.profile.message==='Not Found'){
                // show alert 
                ui.clearAlert();
                ui.showAlert('user not found','alert alert-danger')
            }
            else{
                // show the user profile
                ui.showProfile(result.profile);
                ui.showRepos(result.repos);

            }
            })
        
        .catch(err=> console.log(err))
        
    }
    else{
        ui.clearProfile();
    }
    
    e.preventDefault();
 })
//  codewithharry
// frfrfrfrffeffefefe
 