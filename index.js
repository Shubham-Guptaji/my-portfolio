// Handling appearance of navbar

let nav = true;
function navfn(){
    document.getElementById("navbar").style.display = nav ? "block" : "none";
    nav = !nav;
}
window.addEventListener('resize',()=>{
    if(window.screen.availWidth > 639){
        document.getElementById("navbar").style.display = "flex";
        nav = false;
    }else if( window.screen.availWidth < 640){
        document.getElementById("navbar").style.display = "none";
        nav = true;
    }
});

// move to root function from title
function moveroot(){ window.location.assign("/")}

// Handling appearance of skills

const skills = ["Full Stack Developer", "Front End Developer", "Backend Developer"];
const maintxt = document.getElementById("maintext");

async function showSkills(maintxt, skills) {
    for (const skill of skills) {
        await showSkill(maintxt, skill);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    showSkills(maintxt, skills);
}

async function showSkill(maintxt, skill) {
    maintxt.innerHTML = "";
    for (let i = 0; i < skill.length; i++) {
        maintxt.innerHTML += skill[i];
        await new Promise(resolve => setTimeout(resolve, 150));
    }
}

showSkills(maintxt, skills);

// About us blinker text

const about = document.getElementById("abouttxt");
showSkills(about, skills)

// footer year

const date = new Date();
const year = date.getFullYear();

document.getElementById("year").innerHTML = `${year} - ${year + 1}`