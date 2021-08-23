import { storageRef } from './firebase';

export const downloadResume = () => {
  var starsRef = storageRef.ref("/resume/gouravResume.pdf");
  starsRef.getDownloadURL().then((url) => {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      link.setAttribute("href", url);
      link.setAttribute("target", "_blank");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
};