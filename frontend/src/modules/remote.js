import variables from  '../variables.json';


function getContent(name) {
    const webcontentlink = variables.remotelink;
    
    const promise = new Promise((resolve, reject) => {

        try{

            const xhr = new XMLHttpRequest();
            xhr.open("POST", webcontentlink + '/metainfo');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status == 200) {
                        const source = JSON.parse(xhr.responseText);
                        // console.log(source);
        
                        xhr.open('GET', webcontentlink + source.content);
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                                const pagecontent = JSON.parse(xhr.responseText);
                                resolve(pagecontent);
                            }
                        }
                        xhr.send();
                    }
                }
            };
        
            xhr.send(name);
        }catch(err){
            reject('Could not load the content from remote for page ' + '\'' + name + '\'');
        }
    });

    return promise;

}



// module.exports = { getContent }
export default getContent;
