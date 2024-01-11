import bibliotheque from "../assets/bibliotheque.jpg"
import takuzu from "../assets/takuzu.jpg"
import cmapper from "../assets/codeMapper.jpg"

const ProjectCardData = [
    {
        imgsrc: bibliotheque,
        title: "Bibliopython",
        text: "This project, written in python, allows to suggesting books to readers according on their profiles and their past readings.",
        view: "" ,
        source: "https://github.com/KevMn6ix/Bibliopython"
    },
    {
        imgsrc: takuzu,
        title: "Takuzu",
        text: "This project was written in C language to solve takuzu grids. The goal of the game is to fill a grid of a certain size respecting the imposed rules.",
        view: "" ,
        source: "https://github.com/KevMn6ix/Takuzu"
    },
    {
        imgsrc: cmapper,
        title: "CodeMapper",
        text: "CodeMapper is a web application developed mainly in JavaScript making it possible to visualise and focus on algorithmic and programming to improve the understanding and understanding and learning of data structures.",
        view: "https://www.youtube.com/watch?v=tlU_QMVz2-g&ab_channel=Tim" ,
        source: ""
    },
];

export default ProjectCardData;

