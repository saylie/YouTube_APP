const apiKey = process.env.REACT_APP_MY_KEY;
const listLength = 10;


const fetchResults = (searchValue) => {

    console.log("API Key:", apiKey);
    return new Promise((resolve, reject) => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${listLength}&q=${searchValue}&key=${apiKey}`
        const xhr =  new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300){
                const response = JSON.parse(xhr.response);
                console.log(response);
                resolve(response)
            }else{
                console.error('Request failed with status:', xhr.status);
                reject(xhr.status)
            }
        }
        xhr.send();
    })

    
}

export { fetchResults };




