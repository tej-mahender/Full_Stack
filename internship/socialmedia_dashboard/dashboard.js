function addSocialMediaLink(platform) {
    const link = document.getElementById(`${platform.toLowerCase()}Link`).value.trim();
    if (link !== '') {
        const socialMediaLinksContainer = document.getElementById('socialMediaLinks');
        const linkElement = document.createElement('div');
        linkElement.classList.add('socialMediaLink');
        const textElement = document.createElement('div');
        textElement.classList.add('socialMediaLinkText');
        const nameElement = document.createElement('a');
        nameElement.href = link;
        nameElement.textContent = platform;
        textElement.appendChild(nameElement);
        linkElement.appendChild(textElement);
        socialMediaLinksContainer.appendChild(linkElement);
    }
    document.getElementById(`${platform.toLowerCase()}Link`).value = '';
}