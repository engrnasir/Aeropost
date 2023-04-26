var userInfo;
var currentUrl;
var gladlyInit = false;
var liveChatEnded = false;
var first_name = "";
var email = "";
var sidekickId = "";
var csatAnswerId = "";
var noAgentAnswerId = "";
var sidekickAppId = "";

function setLastChatOpened(name) {
    sessionStorage.setItem('lastChatOpened', name);
}

function hideAda() {
    console.log("hide-ada")
    adaEmbed.getInfo().then(function (info) {
        if (info.isChatOpen === true) {
            adaEmbed.toggle();
            const adaButton = document.querySelector("#ada-button-frame");
            adaButton.classList.remove("show-button");
        }
    });
}

function displayAda() {
    adaEmbed.getInfo().then(function (info) {
        if (info.isChatOpen === closed) {
            const adaButton = document.querySelector("#ada-button-frame");
            adaEmbed.toggle();
            adaButton.classList.add("show-button");
            //setLastChatOpened('ada');
        }
    });
}

function checkLastChatOpened() {
    let lastChatOpened = sessionStorage.getItem('lastChatOpened');

    if (lastChatOpened === 'gladly') {
        startGladly();
    } else {
        const adaButton = document.querySelector("#ada-button-frame");
        adaButton.classList.add("show-button");
    }
}

function startGladly(first_name, email, sidekickId) {
    if (gladlyInit) {
        console.log("Gladly Session Already Open")

        var gladlyWidget = document.getElementById("gladlyChat_container hide-widget");
            if(gladlyWidget){
                //alert("hidden widget")
                console.log("hidden widget")
                //alert(gladlyWidget)
                 gladlyWidget.id = "gladlyChat_container";
            }


        if (Gladly.getAvailability() == "AVAILABLE") {
            console.log("Gladly Session Already Open and Agent online")
            Gladly.show();
            setLastChatOpened('gladly');
            return;
        } else {
            // REOPEN - No Agents Avaliable
            console.log("Reopen Chat - NO AGENTS")
            //alert(csatAnswerId)
            window.adaEmbed.reset({
                resetChatHistory: false,
                greeting: csatAnswerId
            });

               setTimeout(() => {
                displayAda();
            }, 1000);

            return
        }
    }

    function getCookie(sidekick) {
        var cookieArr = document.cookie.split(";");
        for (var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            if (sidekick == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }


    function checkCookie() {
        if (getCookie("sidekickAppId") == null || getCookie("sidekickAppId") == "undefined") {
            document.cookie = `sidekickAppId=${sidekickId}`;
            document.cookie = `csatAnswerId=${csatAnswerId}`;
            return sidekickId

        } else {
            return getCookie("sidekickAppId")

        }
    }


    Gladly.init({
        appId: checkCookie(),
        autoShowButton: false
    }).then(function () {
        gladlyInit = true;

        console.log(Gladly.getAvailability())
        hideAda();
        if (Gladly.getAvailability() == "AVAILABLE") {

            let lastChatOpened = sessionStorage.getItem('lastChatOpened');
            if (lastChatOpened !== 'gladly') {
                Gladly.clearUser().then(() => {
                    let user = {
                        //these are ada variable names - if Gladly asks for name and email confirm you have the correct values
                        name: first_name,
                        email: email
                    };
                    Gladly.setUser(user);
                });
            }

            Gladly.show();
            setLastChatOpened('gladly');

        } else {
            console.log("NO AGENTS - new chat")

            console.log(noAgentAnswerId)
            window.adaEmbed.reset({
                resetChatHistory: false,
                greeting: noAgentAnswerId
            });

            setTimeout(() => {
                displayAda();
            }, 1000);



        }

        Gladly.on('sidekick:closed', function () {
            const gladlyButton = document.getElementById('custom-gladly-chat-button');
            if (liveChatEnded) {
                gladlyButton.classList.remove('show-button');
                displayAda();
            } else {
                gladlyButton.classList.add('show-button');
            }
        });

        Gladly.on('conversation:ended', function () {
            liveChatEnded = true;
            setLastChatOpened('ada');
            const gladlyButton = document.getElementById('custom-gladly-chat-button');
            gladlyButton.classList.remove('show-button');

            window.adaEmbed.reset({
                resetChatHistory: false,
                greeting: getCookie("csatAnswerId")
            });

            setTimeout(() => {
                displayAda();

               const gladlyButton = document.querySelector("#gladlyChat_container");
                gladlyButton.setAttribute('id', 'gladlyChat_container hide-widget')
                liveChatEnded = true;
            }, 1000);



        });

        Gladly.on('conversation:started', function () {
            liveChatEnded = false;
        });

        Gladly.on('sidekick:opened', function () {
            hideAda();
        });

    }).catch(function (error) {
        displayAda();
        console.log('error:', error);

    });
}

try {

    currentUrl = window.location.pathname;

} catch (ex) {

    currentUrl = 'empty';
}


    try {

        userInfo = 'empty';
        var ssoChat = JSON.parse(document.getElementById('salesforce').getAttribute("data-sso"));
        if (ssoChat != null && ssoChat != '') {
            userInfo = ssoChat;
        }
    } catch (err) {
        userInfo = 'empty';
    }

    var userData;
    if (userInfo == 'empty') {
        var isLogged;
        if (userName != "")
            isLogged = "yes";
        else
            isLogged = "no";
        var countryCode = document.getElementById('salesforce').getAttribute("data-currentcountry");
        if (countryCode.length > 0) {
            countryCode = countryCode;
        } else {
            countryCode = '';
        }
        userData = {
            api: 'usrData',
            countryCode: countryCode,
            languageCode: 'en',
            environmentType: 'PRD',
            isLogged: isLogged,
            firstName: userName,
            lastName: '',
            email: '',
            accountNumber: userAccount
        };
    } else {
        userData = {
            api: 'usrData',
            countryCode: userInfo.CustomerInformation.Gateway.WebCode,
            languageCode: lang,
            environmentType: 'PRD',
            isLogged: 'yes',
            firstName: userInfo.CustomerInformation.FirstName,
            lastName: userInfo.CustomerInformation.LastName1 + " " + userInfo.CustomerInformation.LastName2,
            email: userInfo.CustomerInformation.Email,
            accountNumber: userInfo.CustomerInformation.Account.toString()
        };
    }
    console.log('Version 1.0 bot');
    console.log("Iniciando Variables");
    switch (userData.countryCode) {
        default:
            userData.languageCode = "en";
            break;

        case "ANU":
            userData.languageCode = "en";
            break;

        case "AUA":
            userData.languageCode = "en";
            break;

        case "AXA":
            userData.languageCode = "en";
            break;

        case "BBQ":
            userData.languageCode = "en";
            break;

        case "BGI":
            userData.languageCode = "en";
            break;

        case "BHS":
            userData.languageCode = "en";
            break;

        case "BOG":
            userData.languageCode = "es";
            break;

        case "BOL":
            userData.languageCode = "es";
            break;

        case "BZE":
            userData.languageCode = "en";
            break;

        case "CCS":
            userData.languageCode = "es";
            break;

        case "CRU":
            userData.languageCode = "en";
            break;

        case "CUR":
            userData.languageCode = "en";
            break;

        case "DOM":
            userData.languageCode = "en";
            break;

        case "ECU":
            userData.languageCode = "es";
            break;

        case "EIS":
            userData.languageCode = "en";
            break;

        case "FDF":
            userData.languageCode = "en";
            break;

        case "GCM":
            userData.languageCode = "en";
            break;

        case "GEO":
            userData.languageCode = "en";
            break;

        case "GND":
            userData.languageCode = "en";
            break;

        case "GUA":
            userData.languageCode = "es";
            break;

        case "KIN":
            userData.languageCode = "en";
            break;

        case "LIM":
            userData.languageCode = "es";
            break;

        case "MGA":
            userData.languageCode = "es";
            break;

        case "MNI":
            userData.languageCode = "en";
            break;

        case "NEV":
            userData.languageCode = "en";
            break;

        case "PAP":
            userData.languageCode = "en";
            break;

        case "POS":
            userData.languageCode = "en";
            break;

        case "PTP":
            userData.languageCode = "en";
            break;

        case "PTY":
            userData.languageCode = "es";
            break;

        case "SAL":
            userData.languageCode = "es";
            break;

        case "SAP":
            userData.languageCode = "es";
            break;

        case "SBH":
            userData.languageCode = "en";
            break;

        case "SCL":
            userData.languageCode = "es";
            break;

        case "SDQ":
            userData.languageCode = "es";
            break;

        case "SJO":
            userData.languageCode = "es";
            break;

        case "SKB":
            userData.languageCode = "en";
            break;

        case "SLU":
            userData.languageCode = "en";
            break;

        case "STT":
            userData.languageCode = "en";
            break;

        case "STX":
            userData.languageCode = "en";
            break;

        case "SVD":
            userData.languageCode = "en";
            break;

        case "SXM":
            userData.languageCode = "en";
            break;

        case "TCA":
            userData.languageCode = "en";
            break;

        case "TEG":
            userData.languageCode = "es";
            break;

    }


    //LOGS for testing purposes only
    console.log('Hidden country: ' + userData.countryCode);
    console.log('Hidden language: ' + userData.languageCode);
    console.log('Hidden environment: ' + userData.environmentType);


    window.adaSettings = {
        metaFields: {
            country: userData.countryCode,
        },
        language: userData.languageCode,
        embedStyles: '#ada-embed {height: 10px;}',

        adaReadyCallback: () => {
            !function (c, n, r, t) { if (!c[r]) { var i, d, p = []; d = "PROD" !== t && t ? "STAGING" === t ? "https://cdn.gladly.qa/gladly/chat-sdk/widget.js" : t : "https://cdn.gladly.com/chat-sdk/widget.js", c[r] = { init: function () { i = arguments; var e = { then: function (t) { return p.push({ type: "t", next: t }), e }, catch: function (t) { return p.push({ type: "c", next: t }), e } }; return e } }, c.__onHelpAppHostReady__ = function (t) { if (delete c.__onHelpAppHostReady__, (c[r] = t).loaderCdn = d, i) for (var e = t.init.apply(t, i), n = 0; n < p.length; n++) { var a = p[n]; e = "t" === a.type ? e.then(a.next) : e.catch(a.next) } }, function () { try { var t = n.getElementsByTagName("script")[0], e = n.createElement("script"); e.async = !0, e.src = d + "?q=" + (new Date).getTime(), t.parentNode.insertBefore(e, t) } catch (t) { } }() } }
                (window, document, 'Gladly', 'PROD')

            checkLastChatOpened();
        },
        eventCallbacks: {
            "custom_handoff": event => {
                first_name = event.user_data.global.name;
                email = event.user_data.global.email;
                sidekickId = event.user_data.global.Sidekick_id;
                csatAnswerId = event.user_data.global.CSAT_answerid;
                noAgentAnswerId = event.user_data.global.No_agent_answerId;
                startGladly(first_name, email, sidekickId);
            }
        }
    }

    var script = document.createElement('script');
    script.id = "__ada";
    script.src = "https://static.ada.support/embed2.js";
    script.setAttribute('data-handle', "aeropost"); //prod

    document.getElementsByTagName('head')[0].appendChild(script);
	