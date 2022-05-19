import data from "../config.json" assert { type: "json" };

export const linkInit = () =>{
    console.log('hello')
    const linkTags = document.querySelectorAll('.app_link')

    linkTags.forEach(tag => {
        tag.setAttribute('href', data.appStoreLink);
    });
}