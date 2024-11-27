import * as command from "./commands.ts";

// Constants
const gaskamRepos = "https://api.github.com/orgs/gaskam/repos";
const githubLinkGaskam = "https://github.com/gaskam/";
const githubLinkPatafix = "https://github.com/PatafixPLTX/";
const githubLinkBotmaker = "https://github.com/Bot-maKeR-0000/";
const discordLink = "http://discord.gaskam.com";
const youtubeLink = "http://youtube.gaskam.com";

globalThis.onload = () => {
    const terminalElement = document.getElementById("terminal");
    const silent = true;
    command.themeDefault(terminalElement, silent);
};

// Event Listeners
let timeout: number | NodeJS.Timeout = -1;
document.addEventListener("keydown", async function (event) {
    const inputElement = document.getElementById("input");
    const terminalElement = document.getElementById("terminal");
    const sessionElement = document.getElementById("session");
    const cursorElement = document.getElementById("cursor");
    const silent = false;
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

                if (inputElement.innerText.startsWith("ask")) {
                    const stringAfterAsk = inputElement.innerText.substring(4);
                    command.ask(terminalElement, stringAfterAsk);
                    inputElement.innerHTML = "";
                    break;
                }

                const inputWords = inputElement.innerText.split("\u00A0");
                const firstWord = inputWords[0];
                let secondWord = "";

                if (inputWords.length > 1 && inputWords[1].startsWith("--")) {
                    secondWord = inputWords[1].substring(2);
                } else if (inputWords.length > 1) {
                    if (terminalElement) {
                        terminalElement.innerHTML +=
                            "<br><br>It's not a valid argument: don't forget to add -- before the argument!";
                    }
                    secondWord = "";
                }

                terminalElement?.classList.add("hidden");
                sessionElement?.classList.add("hidden");
                inputElement.classList.add("hidden");

                switch (firstWord) {
                    case "help":
                        await command.help(terminalElement);
                        break;
                    case "ls":
                        await command.ls(terminalElement);
                        break;
                    case "tree":
                        await command.tree(terminalElement);
                        break;
                    case "about":
                        await command.about(terminalElement);
                        break;
                    case "projects":
                        switch (secondWord) {
                            case "typescript":
                                await command.projectsTypescript(
                                    terminalElement,
                                    gaskamRepos
                                );
                                break;
                            case "javascript":
                                await command.projectsJavascript(
                                    terminalElement,
                                    gaskamRepos
                                );
                                break;
                            case "bun":
                                await command.projectsBun(
                                    terminalElement,
                                    gaskamRepos
                                );
                                break;
                            case "lua":
                                await command.projectsLua(
                                    terminalElement,
                                    gaskamRepos
                                );
                                break;
                            case "python":
                                await command.projectsPython(
                                    terminalElement,
                                    gaskamRepos
                                );
                                break;
                            case "cpp":
                                await command.projectsCpp(
                                    terminalElement,
                                    gaskamRepos
                                );
                                break;
                            case "":
                                await command.projects(terminalElement, gaskamRepos);
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
                        await command.support(terminalElement);
                        break;
                    case "github":
                        switch (secondWord) {
                            case "gaskam":
                                await command.githubGaskam(terminalElement, githubLinkGaskam);
                                break;
                            case "patafix":
                                await command.githubPatafix(terminalElement, githubLinkPatafix);
                                break;
                            case "botmaker":
                                await command.githubBotmaker(terminalElement, githubLinkBotmaker);
                                break;
                            case "":
                                await command.github(terminalElement, githubLinkGaskam);
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
                        await command.discord(terminalElement, discordLink);
                        break;
                    case "youtube":
                        await command.youtube(terminalElement, youtubeLink);
                        break;
                    case "jobs":
                        await command.jobs(terminalElement);
                        break;
                    case "dev":
                        await command.dev(terminalElement);
                        break;
                    case "lang":
                        switch (secondWord) {
                            case "default":
                                await command.langDefault(terminalElement);
                                break;
                            case "en":
                                await command.langEn(terminalElement);
                                break;
                            case "fr":
                                await command.langFr(terminalElement);
                                break;
                            case "es":
                                await command.langEs(terminalElement);
                                break;
                            case "it":
                                await command.langIt(terminalElement);
                                break;
                            case "de":
                                await command.langDe(terminalElement);
                                break;
                            case "pt":
                                await command.langPt(terminalElement);
                                break;
                            case "ru":
                                await command.langRu(terminalElement);
                                break;
                            case "zh":
                                await command.langZh(terminalElement);
                                break;
                            case "ja":
                                await command.langJa(terminalElement);
                                break;
                            case "ko":
                                await command.langKo(terminalElement);
                                break;
                            case "":
                                await command.lang(terminalElement);
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
                                await command.theme(terminalElement);
                                break;
                            case "default":
                                await command.themeDefault(terminalElement, silent);
                                break;
                            case "light":
                                await command.themeLight(terminalElement, silent);
                                break;
                            case "dark":
                                await command.themeDark(terminalElement, silent);
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
                        await command.reload(terminalElement);
                        break;
                    case "events":
                        await command.events(terminalElement);
                        break;
                    case "community":
                        await command.community(terminalElement);
                        break;
                    case "contact":
                        await command.contact(terminalElement);
                        break;
                    case "privacy":
                        switch (secondWord) {
                            case "":
                                await command.privacy(terminalElement);
                                break;
                            case "--pdf":
                                await command.privacyPdf(terminalElement);
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
                                await command.terms(terminalElement);
                                break;
                            case "--pdf":
                                await command.termsPdf(terminalElement);
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
                        await command.credits(terminalElement);
                        break;
                    case "news":
                        await command.news(terminalElement);
                        break;
                    case "faq":
                        await command.faq(terminalElement);
                        break;
                    case "ask":
                        break;
                    case "newsletter":
                        await command.newsletter(terminalElement);
                        break;
                    case "feedback":
                        await command.feedback(terminalElement);
                        break;
                    case "login":
                        switch (secondWord) {
                            case "":
                                await command.login(terminalElement);
                                break;
                            case "--github":
                                await command.loginGithub(terminalElement);
                                break;
                            case "--discord":
                                await command.loginDiscord(terminalElement);
                                break;
                            case "--google":
                                await command.loginGoogle(terminalElement);
                                break;
                            case "--twitter":
                                await command.loginTwitter(terminalElement);
                                break;
                            case "--microsoft":
                                await command.loginMicrosoft(terminalElement);
                                break;
                            case "--apple":
                                await command.loginApple(terminalElement);
                                break;
                            case "--email":
                                await command.loginEmail(terminalElement);
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
                                await command.register(terminalElement);
                                break;
                            case "--github":
                                await command.registerGithub(terminalElement);
                                break;
                            case "--discord":
                                await command.registerDiscord(terminalElement);
                                break;
                            case "--google":
                                await command.registerGoogle(terminalElement);
                                break;
                            case "--twitter":
                                await command.registerTwitter(terminalElement);
                                break;
                            case "--microsoft":
                                await command.registerMicrosoft(terminalElement);
                                break;
                            case "--apple":
                                await command.registerApple(terminalElement);
                                break;
                            case "--email":
                                await command.registerEmail(terminalElement);
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
                        await command.profile(terminalElement);
                        break;
                    case "settings":
                        await command.settings(terminalElement);
                        break;
                    case "logout":
                        await command.logout(terminalElement);
                        break;
                    case "search":
                        await command.search(terminalElement);
                        break;
                    default:
                        if (terminalElement) {
                            terminalElement.innerHTML += command.defaultError;
                        }
                        break;
                }

                inputElement.innerText = "";

                terminalElement?.classList.remove("hidden");
                sessionElement?.classList.remove("hidden");
                inputElement.classList.remove("hidden");

                if (cursorElement) {
                    globalThis.scrollTo(0, document.body.scrollHeight);
                }
                break;
            }
            case " ":
                inputElement.innerText += "\u00A0";
                break;
            case /^[-'0-9a-zA-ZÀ-ÿ\-\,\?\!\.]$/.test(event.key) && event.key:
                inputElement.innerText += event.key;
                break;
            default:
                return;
        }

        if (cursorElement) {
            globalThis.scrollTo(0, document.body.scrollHeight);
        }

        cursorElement?.classList.add("write");

        clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            cursorElement?.classList.remove("write");
        }, 1000);
    }
});
