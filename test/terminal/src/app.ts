import * as command from "./commands.ts";

let timeout: -1;
document.addEventListener("keydown", function (event) {
    const inputElement = document.getElementById("input");
    const terminalElement = document.getElementById("terminal");
    const cursorElement = document.getElementById("cursor");
    if (inputElement) {
        switch (event.key) {
            case "Backspace": {
                inputElement.innerText = inputElement.innerText.slice(0, -1);
                break;
            }
            case "Enter": {
                if (
                    inputElement.innerText.includes("<") ||
                    inputElement.innerText.includes(">")
                ) {
                    return;
                }

                if (
                    inputElement.innerText === "clear" ||
                    inputElement.innerText === "cls"
                ) {
                    if (terminalElement) {
                        terminalElement.innerHTML = command.defaultMessage;
                    }
                    inputElement.innerText = "";
                    break;
                }

                if (terminalElement) {
                    terminalElement.innerHTML += `<br><br><span class="session">gaskam.com $&nbsp;</span>${inputElement.innerText}`;
                }

                const inputWords = inputElement.innerText.split("\u00A0");
                const firstWord = inputWords[0];
                let secondWord = "";

                if (inputWords.length > 1 && inputWords[1].startsWith("--")) {
                    secondWord = inputWords[1].substring(2);
                } else if (inputWords.length > 1) {
                    if (terminalElement) {
                        terminalElement.innerHTML +=
                            "<br>&nbsp;&nbsp;It's not a valid argument: don't forget to add -- before the argument!";
                    }
                    secondWord = "";
                }

                switch (firstWord) {
                    case "help":
                        command.help(terminalElement);
                        break;
                    case "ls":
                        command.ls(terminalElement);
                        break;
                    case "tree":
                        command.tree(terminalElement);
                        break;
                    case "about":
                        command.about(terminalElement);
                        break;
                    case "projects":
                        switch (secondWord) {
                            case "typescript":
                                command.projectsTypescript(terminalElement);
                                break;
                            case "javascript":
                                command.projectsJavascript(terminalElement);
                                break;
                            case "bun":
                                command.projectsBun(terminalElement);
                                break;
                            case "lua":
                                command.projectsLua(terminalElement);
                                break;
                            case "python":
                                command.projectsPython(terminalElement);
                                break;
                            case "cpp":
                                command.projectsCpp(terminalElement);
                                break;
                            case "":
                                command.projects(terminalElement);
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML +=
                                        command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "support":
                        command.support(terminalElement);
                        break;
                    case "github":
                        switch (secondWord) {
                            case "gaskam":
                                command.githubGaskam(terminalElement);
                                break;
                            case "patafix":
                                command.githubPatafix(terminalElement);
                                break;
                            case "botmaker":
                                command.githubBotmaker(terminalElement);
                                break;
                            case "":
                                command.github(terminalElement);
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML +=
                                        command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "discord":
                        command.discord(terminalElement);
                        break;
                    case "youtube":
                        command.youtube(terminalElement);
                        break;
                    case "jobs":
                        command.jobs(terminalElement);
                        break;
                    case "dev":
                        command.dev(terminalElement);
                        break;
                    case "lang":
                        switch (secondWord) {
                            case "default":
                                command.langDefault(terminalElement);
                                break;
                            case "en":
                                command.langEn(terminalElement);
                                break;
                            case "fr":
                                command.langFr(terminalElement);
                                break;
                            case "es":
                                command.langEs(terminalElement);
                                break;
                            case "it":
                                command.langIt(terminalElement);
                                break;
                            case "de":
                                command.langDe(terminalElement);
                                break;
                            case "pt":
                                command.langPt(terminalElement);
                                break;
                            case "ru":
                                command.langRu(terminalElement);
                                break;
                            case "zh":
                                command.langZh(terminalElement);
                                break;
                            case "ja":
                                command.langJa(terminalElement);
                                break;
                            case "ko":
                                command.langKo(terminalElement);
                                break;
                            case "":
                                command.lang(terminalElement);
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML +=
                                        command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "theme":
                        switch (secondWord) {
                            case "":
                                command.theme(terminalElement);
                                break;
                            case "--default":
                                command.themeDefault(terminalElement);
                                break;
                            case "--light":
                                command.themeLight(terminalElement);
                                break;
                            case "--dark":
                                command.themeDark(terminalElement);
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML +=
                                        command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "reload":
                        command.reload(terminalElement);
                        break;
                    case "events":
                        command.events(terminalElement);
                        break;
                    case "community":
                        command.community(terminalElement);
                        break;
                    case "contact":
                        command.contact(terminalElement);
                        break;
                    case "privacy":
                        switch (secondWord) {
                            case "":
                                command.privacy(terminalElement);
                                break;
                            case "--pdf":
                                command.privacyPdf(terminalElement);
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML +=
                                        command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "terms":
                        switch (secondWord) {
                            case "":
                                command.terms(terminalElement);
                                break;
                            case "--pdf":
                                command.termsPdf(terminalElement);
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML +=
                                        command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "credits":
                        command.credits(terminalElement);
                        break;
                    case "news":
                        command.news(terminalElement);
                        break;
                    case "faq":
                        command.faq(terminalElement);
                        break;
                    case "ask":
                        command.ask(terminalElement);
                        break;
                    case "newsletter":
                        command.newsletter(terminalElement);
                        break;
                    case "feedback":
                        command.feedback(terminalElement);
                        break;
                    case "login":
                        switch (secondWord) {
                            case "":
                                command.login(terminalElement);
                                break;
                            case "--github":
                                command.loginGithub(terminalElement);
                                break;
                            case "--discord":
                                command.loginDiscord(terminalElement);
                                break;
                            case "--google":
                                command.loginGoogle(terminalElement);
                                break;
                            case "--twitter":
                                command.loginTwitter(terminalElement);
                                break;
                            case "--microsoft":
                                command.loginMicrosoft(terminalElement);
                                break;
                            case "--apple":
                                command.loginApple(terminalElement);
                                break;
                            case "--email":
                                command.loginEmail(terminalElement);
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML +=
                                        command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "register":
                        switch (secondWord) {
                            case "":
                                command.register(terminalElement);
                                break;
                            case "--github":
                                command.registerGithub(terminalElement);
                                break;
                            case "--discord":
                                command.registerDiscord(terminalElement);
                                break;
                            case "--google":
                                command.registerGoogle(terminalElement);
                                break;
                            case "--twitter":
                                command.registerTwitter(terminalElement);
                                break;
                            case "--microsoft":
                                command.registerMicrosoft(terminalElement);
                                break;
                            case "--apple":
                                command.registerApple(terminalElement);
                                break;
                            case "--email":
                                command.registerEmail(terminalElement);
                                break;
                            default:
                                if (terminalElement) {
                                    terminalElement.innerHTML +=
                                        command.defaultError;
                                }
                                break;
                        }
                        break;
                    case "profile":
                        command.profile(terminalElement);
                        break;
                    case "settings":
                        command.settings(terminalElement);
                        break;
                    case "logout":
                        command.logout(terminalElement);
                        break;
                    case "search":
                        command.search(terminalElement);
                        break;
                    default:
                        if (terminalElement) {
                            terminalElement.innerHTML += command.defaultError;
                        }
                        break;
                }

                inputElement.innerText = "";
                break;
            }
            case " ":
                inputElement.innerText += "\u00A0";
                break;
            case /^[a-zA-Z0-9\-\,]$/.test(event.key) && event.key:
                inputElement.innerText += event.key;
                break;
            default:
                return;
        }

        if (cursorElement) {
            window.scrollTo(0, document.body.scrollHeight);
        }

        cursorElement?.classList.add("write");

        clearTimeout(timeout);
        timeout = setTimeout(() => { // I don't know why but it's working - an error probably because of Bun
            cursorElement?.classList.remove("write");
        }, 1000);
    }
});
