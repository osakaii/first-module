import data from "../config.json" assert { type: "json" };

export const addAppStoreLink = () =>{
    const linkTags = document.querySelectorAll('.app_link')

    linkTags.forEach(tag => {
        tag.setAttribute('href', data.appStoreLink);
    });
}