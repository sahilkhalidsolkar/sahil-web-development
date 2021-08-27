class GitHub{
    constructor(){
        this.clientId='86617d61d5ea5d490000';
        this.clientSecret='bf9a2d46fec5af3c01ce459984c8a940314455c8';
        this.repo_count=5;
        this.repo_sort='created:asc';
    }
    async getUser(user){
        const profileresponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secrets=${this.clientSecret}`);
        const repositoryresponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.clientId}&client_secrets=${this.clientSecret}`);
        const profile= await profileresponse.json();
        const repos= await repositoryresponse.json();
        return {
            profile,
            repos
        }
    }
}