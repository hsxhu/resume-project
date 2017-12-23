var bio = {
    "name": "Xiao Hu",
    "role": "Web Developer",
    "contacts": {
        "mobile": "13761863797",
        "email": "ruolan.hu92@outlook.com",
        "github": "hsxhu",
        "location": "Shanghai"
    },
    "welcomeMessage": "Hello World!",
    "skills": [
        "design", "awesomeness", "flying"
    ],
    "biopic": "images/fry.jpg"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName, formattedRole, formattedPic, welcome);
    //head firstline

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    //contact info

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });
}
bio.display();



var work = {
    "jobs": [{
            "employer": "JWDA",
            "title": "Designer and Branding Specialist",
            "dates": "November 2016 - now",
            "location": "Shanghai",
            "description": "My work is focused on architecture critism, branding and advertising. I am working as an editor and manager of websites and online social platforms. At the same time, design works also continue, such as graphic design, industurial design, small scale architecturial and interior design."
        },
        {
            "employer": "AUD",
            "title": "Architecture Assistant",
            "dates": "Jun 2016 - October 2016",
            "location": "Shanghai",
            "description": "Joining the architecturial scheme group, I took part in several design of commercial space."
        },
        {
            "employer": "META-Project",
            "title": "Researcher",
            "dates": "March 2016 - Jun 2016",
            "location": "Beijing",
            "description": "In this period of time, my research focused on current living condition of young people in Beijing, in both social and spatical aspect. Different kinds of share flats and co-working space have been studied and analised. The result has been used to give information for designing and setting up YanjingLi, a new youth apartment."
        }
    ]
}

work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        //work and title loop
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        //work dates loop
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);

    });
}
work.display();


var projects = {
    "projects": [{
            "title": "My protfolio",
            "dates": "2017",
            "description": "This is a project created after learning HTML and CSS, which collects the links of my programming excerise.",
            "images": [
                "https://picsum.photos/300/200?image=0", "https://picsum.photos/300/200?image=10"
            ]
        },
        {
            "title": "Animal card",
            "dates": "2017",
            "description": "This project aims to use CSS to optimize the layout.",
            "images": [
                "https://picsum.photos/300/200?image=20", "https://picsum.photos/300/200?image=30"
            ]
        }
    ]
}

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
}

projects.display();


var education = {
    "schools": [{
            "name": "University Collage London",
            "location": "London",
            "degree": "Master of Science",
            "majors": ["Spatial Design"],
            "dates": "2015",
            "url": "http://www.ucl.ac.uk/"
        },
        {
            "name": "University of Liverpool",
            "location": "Liverpool",
            "degree": "Banchlor of Art",
            "majors": ["Architecture"],
            "dates": "2012",
            "url": "https://www.liverpool.ac.uk/"
        }
    ],
    "onlineCourses": [{
        "title": "front-end development",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
    }]
}

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = (HTMLschoolName.replace("%data%", school.name)).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedNameDegree, formattedLocation, formattedDates, formattedMajor);
    });

    education.onlineCourses.forEach(function(course) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedTitle = (HTMLonlineTitle.replace("%data%", course.title)).replace("#", course.url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);

        $(".education-entry:last").append(formattedTitleSchool, formattedDates);

    });
}
education.display();




$("#mapDiv").append(googleMap);
//add a map


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
};