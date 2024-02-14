import showdown from "showdown";

const converter = new showdown.Converter({
    tables: true,
    excludeTrailingPunctuationFromURLs: true,
    tasklists: true,
});

interface Repo {
    name: string;
    description: string;
    language: string;
}

export const defaultMessage =
    "<span class='title'>WELOME TO GASKAM.COM TERMINAL</span>";
export const defaultError =
    "<br><br>Command not found, type 'help' to see all commands";

// Help
export function help(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
        <br>
        <br>Here is the list of all commands | Type '--' to add an argument to the command
        <br><br>
        <table class="noTableBackground">
            <tr>
                <th>Command</th>
                <th>Description</th>
            <tr>
                <td><a href="">help</a></td>
                <td>Display all commands</td>
            </tr>
            <tr>
                <td><a href="">clear</a></td>
                <td>Clear the terminal</td>
            </tr>
            <tr>
                <td><a href="">ls</a></td>
                <td>Definded later</td>
            </tr>
            <tr>
                <td><a href="">tree</a></td>
                <td>List of all files of the project (like GitHub)</td>
            </tr>
            <tr>
                <td><a href="">about</a></td>
                <td>Shows some very very useful informations (the boring ones) about us</td>
            </tr>
            <tr>
                <td><a href="">projects</a></td>
                <td>A presentation of all projects</td>
            </tr>
            <tr>
                <td><a href="">support</a></td>
                <td>Support us with a donation</td>
            </tr>
            <tr>
                <td><a href="">github</a></td>
                <td>Link to the GitHub page</td>
            </tr>
            <tr>
                <td><a href="">discord</a></td>
                <td>Link to the Discord server</td>
            </tr>
            <tr>
                <td><a href="">youtube</a></td>
                <td>Link to the YouTube channel</td>
            </tr>
            <tr>
                <td><a href="">jobs</a></td>
                <td>Job opportunities (jobs.gaskam.com)</td>
            </tr>
            <tr>
                <td><a href="">dev</a></td>
                <td>Developers area (dev.gaskam.com)</td>
            </tr>
            <tr>
                <td><a href="">lang</a></td>
                <td>Change language (en, fr, es, it, de, pt, ru, zh, ja, ko)</td>
            </tr>
            <tr>
                <td><a href="">theme</a></td>
                <td>Change theme (light, dark)</td>
            </tr>
            <tr>
                <td><a href="">reload</a></td>
                <td>Reload the page</td>
            </tr>
            <tr>
                <td><a href="">events</a></td>
                <td>List of all events</td>
            </tr>
            <tr>
                <td><a href="">community</a></td>
                <td>List of all community projects which use our tools</td>
            </tr>
            <tr>
                <td><a href="">clear</a></td>
                <td>Clear the terminal</td>
            </tr>
            <tr>
                <td><a href="">contact</a></td>
                <td>Contact us</td>
            </tr>
            <tr>
                <td><a href="">privacy</a></td>
                <td>Privacy policy</td>
            </tr>
            <tr>
                <td><a href="">terms</a></td>
                <td>Terms of service</td>
            </tr>
            <tr>
                <td><a href="">credits</a></td>
                <td>List of all contributors</td>
            </tr>
            <tr>
                <td><a href="">news</a></td>
                <td>List of all news</td>
            </tr>
            <tr>
                <td><a href="">faq</a></td>
                <td>List of all frequently asked questions</td>
            </tr>
            <tr>
                <td><a href="">ask</a></td>
                <td>Ask a question</td>
            </tr>
            <tr>
                <td><a href="">newsletter</a></td>
                <td>Subscribe to the newsletter</td>
            </tr>
            <tr>
                <td><a href="">feedback</a></td>
                <td>Send us a feedback</td>
            </tr>
            <tr>
                <td><a href="">login</a></td>
                <td>Login to the website</td>
            </tr>
            <tr>
                <td><a href="">register</a></td>
                <td>Register to the website</td>
            </tr>
            <tr>
                <td><a href="">profile</a></td>
                <td>Your profile</td>
            </tr>
            <tr>
                <td><a href="">settings</a></td>
                <td>Your settings</td>
            </tr>
            <tr>
                <td><a href="">logout</a></td>
                <td>Logout from the website</td>
            </tr>
            <tr>
                <td><a href="">search</a></td>
                <td>Search for something</td>
            </tr>
        </table>
        `;
    }
}

// Ls
export function ls(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Tree
export function tree(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// About
export function about(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Projects
export async function projects(
    terminalElement: HTMLElement | null,
    gaskamRepos: string
) {
    const response = await fetch(gaskamRepos);
    const data = await response.json();
    const repositories: Repo[] = data
        .filter((repo: Repo) => repo.name !== ".github")
        .map((repo: Repo) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
        }));

    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Here is the list of all projects
    <br>
    <br>
    `;
        const table = document.createElement("table");
        repositories.forEach((repo: Repo) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.classList.add("fixedElement");
            const descriptionCell = document.createElement("td");
            descriptionCell.classList.add("tableDescription");
            const languageCell = document.createElement("td");
            languageCell.classList.add("fixedElement");

            nameCell.textContent = repo.name;
            descriptionCell.textContent = repo.description;
            languageCell.textContent = repo.language;

            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(languageCell);
            table.appendChild(row);
        });

        terminalElement.appendChild(table);

        terminalElement.innerHTML += `
    <br>
    <br>You can sort by language with --typescript, --javascript, --bun, --lua, --python, --cpp
    `;
    }
}
export async function projectsTypescript(
    terminalElement: HTMLElement | null,
    gaskamRepos: string
) {
    const response = await fetch(gaskamRepos);
    const data = await response.json();
    const repositories: Repo[] = data
        .filter(
            (repo: Repo) =>
                repo.name !== ".github" && repo.language === "TypeScript"
        )
        .map((repo: Repo) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
        }));

    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Here is the list of all TypeScript projects
    <br>
    <br>
    `;
        const table = document.createElement("table");
        repositories.forEach((repo: Repo) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.classList.add("fixedElement");
            const descriptionCell = document.createElement("td");
            descriptionCell.classList.add("tableDescription");
            const languageCell = document.createElement("td");
            languageCell.classList.add("fixedElement");

            nameCell.textContent = repo.name;
            descriptionCell.textContent = repo.description;
            languageCell.textContent = repo.language;

            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(languageCell);
            table.appendChild(row);
        });

        terminalElement.appendChild(table);
    }
}
export async function projectsJavascript(
    terminalElement: HTMLElement | null,
    gaskamRepos: string
) {
    const response = await fetch(gaskamRepos);
    const data = await response.json();
    const repositories: Repo[] = data
        .filter(
            (repo: Repo) =>
                repo.name !== ".github" && repo.language === "JavaScript"
        )
        .map((repo: Repo) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
        }));

    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Here is the list of all JavaScript projects
    <br>
    <br>
    `;
        const table = document.createElement("table");
        repositories.forEach((repo: Repo) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.classList.add("fixedElement");
            const descriptionCell = document.createElement("td");
            descriptionCell.classList.add("tableDescription");
            const languageCell = document.createElement("td");
            languageCell.classList.add("fixedElement");

            nameCell.textContent = repo.name;
            descriptionCell.textContent = repo.description;
            languageCell.textContent = repo.language;

            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(languageCell);
            table.appendChild(row);
        });

        terminalElement.appendChild(table);
    }
}
export async function projectsBun(
    terminalElement: HTMLElement | null,
    gaskamRepos: string
) {
    const response = await fetch(gaskamRepos);
    const data = await response.json();
    const repositories: Repo[] = data
        .filter(
            (repo: Repo) => repo.name !== ".github" && repo.language === "Bun"
        )
        .map((repo: Repo) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
        }));

    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Here is the list of all Bun projects
    <br>
    <br>
    `;
        const table = document.createElement("table");
        repositories.forEach((repo: Repo) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.classList.add("fixedElement");
            const descriptionCell = document.createElement("td");
            descriptionCell.classList.add("tableDescription");
            const languageCell = document.createElement("td");
            languageCell.classList.add("fixedElement");

            nameCell.textContent = repo.name;
            descriptionCell.textContent = repo.description;
            languageCell.textContent = repo.language;

            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(languageCell);
            table.appendChild(row);
        });

        terminalElement.appendChild(table);
    }
}
export async function projectsLua(
    terminalElement: HTMLElement | null,
    gaskamRepos: string
) {
    const response = await fetch(gaskamRepos);
    const data = await response.json();
    const repositories: Repo[] = data
        .filter(
            (repo: Repo) => repo.name !== ".github" && repo.language === "Lua"
        )
        .map((repo: Repo) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
        }));

    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Here is the list of all Lua projects
    <br>
    <br>
    `;
        const table = document.createElement("table");
        repositories.forEach((repo: Repo) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.classList.add("fixedElement");
            const descriptionCell = document.createElement("td");
            descriptionCell.classList.add("tableDescription");
            const languageCell = document.createElement("td");
            languageCell.classList.add("fixedElement");

            nameCell.textContent = repo.name;
            descriptionCell.textContent = repo.description;
            languageCell.textContent = repo.language;

            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(languageCell);
            table.appendChild(row);
        });

        terminalElement.appendChild(table);
    }
}
export async function projectsPython(
    terminalElement: HTMLElement | null,
    gaskamRepos: string
) {
    const response = await fetch(gaskamRepos);
    const data = await response.json();
    const repositories: Repo[] = data
        .filter(
            (repo: Repo) =>
                repo.name !== ".github" && repo.language === "Python"
        )
        .map((repo: Repo) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
        }));

    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Here is the list of all Python projects
    <br>
    <br>
    `;
        const table = document.createElement("table");
        repositories.forEach((repo: Repo) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.classList.add("fixedElement");
            const descriptionCell = document.createElement("td");
            descriptionCell.classList.add("tableDescription");
            const languageCell = document.createElement("td");
            languageCell.classList.add("fixedElement");

            nameCell.textContent = repo.name;
            descriptionCell.textContent = repo.description;
            languageCell.textContent = repo.language;

            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(languageCell);
            table.appendChild(row);
        });

        terminalElement.appendChild(table);
    }
}
export async function projectsCpp(
    terminalElement: HTMLElement | null,
    gaskamRepos: string
) {
    const response = await fetch(gaskamRepos);
    const data = await response.json();
    const repositories: Repo[] = data
        .filter(
            (repo: Repo) => repo.name !== ".github" && repo.language === "C++"
        )
        .map((repo: Repo) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
        }));

    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Here is the list of all C++ projects
    <br>
    <br>
    `;
        const table = document.createElement("table");
        repositories.forEach((repo: Repo) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.classList.add("fixedElement");
            const descriptionCell = document.createElement("td");
            descriptionCell.classList.add("tableDescription");
            const languageCell = document.createElement("td");
            languageCell.classList.add("fixedElement");

            nameCell.textContent = repo.name;
            descriptionCell.textContent = repo.description;
            languageCell.textContent = repo.language;

            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(languageCell);
            table.appendChild(row);
        });

        terminalElement.appendChild(table);
    }
}

// Support
export function support(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// GitHub
export function github(
    terminalElement: HTMLElement | null,
    githubGaskam: string
) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Page opened in a new tab at <a href="${githubGaskam}" target="blank">${githubGaskam}</a>
    <br>You can sort by profile with --gaskam, --botmaker, --patafix to get more informations
    `;
    }
    globalThis.open(githubGaskam, "_blank");
}
export async function githubGaskam(
    terminalElement: HTMLElement | null,
    githubGaskam: string
) {
    const readmeUrl =
        "https://raw.githubusercontent.com/gaskam-com/.github/main/profile/README.md";
    const response = await fetch(readmeUrl);
    const readmeText = await response.text();
    const htmlText = converter.makeHtml(readmeText);
    if (terminalElement) {
        terminalElement.innerHTML += `
        <br><div class="markdown">${htmlText}</div>
        <br>Page opened in a new tab at <a href="${githubGaskam}" target="_blank">${githubGaskam}</a>
    `;
    }
    globalThis.open(githubGaskam, "_blank");
}
export async function githubBotmaker(
    terminalElement: HTMLElement | null,
    githubBotmaker: string
) {
    const readmeUrl =
        "https://raw.githubusercontent.com/Bot-maKeR-0000/ABOUT/main/README.md";
    const response = await fetch(readmeUrl);
    const readmeText = await response.text();
    const htmlText = converter.makeHtml(readmeText);
    if (terminalElement) {
        terminalElement.innerHTML += `
        <br><div class="markdown">${htmlText}</div>
        <br>Page opened in a new tab at <a href="${githubBotmaker}" target="_blank">${githubBotmaker}</a>
    `;
    }
    globalThis.open(githubBotmaker, "_blank");
}
export async function githubPatafix(
    terminalElement: HTMLElement | null,
    githubPatafix: string
) {
    const readmeUrl =
        "https://raw.githubusercontent.com/PatafixPLTX/ABOUT/main/README.md";
    const response = await fetch(readmeUrl);
    const readmeText = await response.text();
    const htmlText = converter.makeHtml(readmeText);
    if (terminalElement) {
        terminalElement.innerHTML += `
        <br><div class="markdown">${htmlText}</div>
        <br>Page opened in a new tab at <a href="${githubPatafix}" target="_blank">${githubPatafix}</a>
`;
    }
    globalThis.open(githubPatafix, "_blank");
}

// Discord
export function discord(
    terminalElement: HTMLElement | null,
    discordLink: string
) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Page opened in a new tab at <a href="${discordLink}" target="blank">${discordLink}</a>
    `;
    }
    globalThis.open(discordLink, "_blank");
}

// Youtube
export function youtube(
    terminalElement: HTMLElement | null,
    youtubeLink: string
) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Page opened in a new tab at <a href="${youtubeLink}" target="blank">${youtubeLink}</a>
    `;
    }
    globalThis.open(youtubeLink, "_blank");
}

// Jobs
export function jobs(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Dev
export function dev(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Lang
export function lang(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Change the language of the terminal
    <br>lang --default - set the language with your system language
    <br>lang --en - set the language to english
    <br>lang --fr - set the language to french
    <br>lang --es - set the language to spanish
    <br>lang --de - set the language to german
    <br>lang --it - set the language to italian
    <br>lang --ru - set the language to russian
    <br>lang --pt - set the language to portuguese
    <br>lang --ja - set the language to japanese
    <br>lang --zh - set the language to chinese
    <br>lang --ko - set the language to korean
    `;
    }
}
export function langDefault(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langEn(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langFr(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langEs(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langDe(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langIt(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langRu(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langPt(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langJa(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langZh(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function langKo(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Theme
export function theme(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Change the theme of the terminal
    <br>theme --default - set the theme with your system preference
    <br>theme --light - set the theme to light
    <br>theme --dark - set the theme to dark
    `;
    }
}
export function themeDefault(
    terminalElement: HTMLElement | null,
    silent: boolean
) {
    const prefersDarkMode =
        globalThis.matchMedia &&
        globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = prefersDarkMode ? "dark" : "light";

    if (!silent) {
        if (terminalElement) {
            terminalElement.innerHTML += `
    <br>
    <br>Setting theme to default (${theme})...
    `;
        }
    }

    if (theme === "dark") {
        themeDark(terminalElement, silent);
    } else {
        themeLight(terminalElement, silent);
    }
}
export function themeLight(
    terminalElement: HTMLElement | null,
    silent: boolean
) {
    document.documentElement.style.setProperty("--background", "#f5f5f5");
    document.documentElement.style.setProperty("--color", "#1d1f21");
    document.documentElement.style.setProperty("--color-secondary", "#666666");
    document.documentElement.style.setProperty("--textblur", "#C8C8C8");
    document.documentElement.style.setProperty(
        "--selection-background",
        "#1d1f21"
    );
    document.documentElement.style.setProperty("--selection-color", "#f5f5f5");
    document.documentElement.style.setProperty("--cursor", "#1d1f21");
    document.documentElement.style.setProperty("--cursor-text", "#f5f5f5");

    if (!silent) {
        if (terminalElement) {
            terminalElement.innerHTML += `
    <br>
    <br>Theme set to light!
    `;
        }
    }
}
export function themeDark(
    terminalElement: HTMLElement | null,
    silent: boolean
) {
    document.documentElement.style.setProperty("--background", "#1d1f21");
    document.documentElement.style.setProperty("--color", "#ffffff");
    document.documentElement.style.setProperty("--color-secondary", "#cccccc");
    document.documentElement.style.setProperty("--textblur", "#C8C8C8");
    document.documentElement.style.setProperty(
        "--selection-background",
        "#ffffff"
    );
    document.documentElement.style.setProperty("--selection-color", "#000000");
    document.documentElement.style.setProperty("--cursor", "#ffffff");
    document.documentElement.style.setProperty("--cursor-text", "#000000");

    if (!silent) {
        if (terminalElement) {
            terminalElement.innerHTML += `
    <br>
    <br>Theme set to dark!
    `;
        }
    }
}

// Reload
export function reload(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Reloading the page...
    `;
    }
    location.reload();
}

// Events
export function events(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Community
export function community(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Create your own project with our tools and get featured here! Contact us for more informations.
    `;
    }
}

// Contact
export function contact(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Send us an email at <a href="mailto:contact@gaskam.com">contact@gaskam.com</a>.
    `;
    }
}

// Privacy
export function privacy(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Privacy policy:
    <br>This is the privacy policy of our website. We are committed to protecting your privacy and ensuring the security of your personal information. We will not share your personal information with any third parties without your consent, except as required by law.
    <br>By using our website, you consent to the collection and use of your personal information as described in this privacy policy. We may update this policy from time to time, so please check back periodically for any changes.
    <br>If you have any questions or concerns about our privacy policy, please contact us.
    `;
    }
}
export function privacyPdf(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Terms
export function terms(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Terms of service:
    <br>These terms of service govern your use of our website. By using our website, you agree to be bound by these terms of service. If you do not agree to these terms of service, you may not use our website.
    <br>We may update these terms of service from time to time, so please check back periodically for any changes. If you continue to use our website after we post changes to these terms of service, you are agreeing to be bound by the updated terms of service.
    <br>If you have any questions or concerns about these terms of service, please contact us.
    `;
    }
}
export function termsPdf(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Credits
export function credits(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// News
export function news(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// FAQ
export function faq(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Ask
export async function ask(
    terminalElement: HTMLElement | null,
    stringAfterAsk: string
) {
    const currentDate = new Date().toISOString();
    const question = {
        date: currentDate,
        question: stringAfterAsk,
    };

    if (terminalElement) {
        terminalElement.innerHTML += `
        <br>
        <br>Your question is: ${question.question}
        <br>It has been sent to our team. If we get a lot of the same question, we will add it to the FAQ
        `;
    }
}

// Newsletter
export function newsletter(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Feedback
export function feedback(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Login
export function login(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginGithub(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginGoogle(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginDiscord(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginTwitter(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginApple(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginMicrosoft(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function loginEmail(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Register
export function register(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerGithub(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerGoogle(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    
    <br>
    `;
    }
}
export function registerDiscord(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerTwitter(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerApple(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerMicrosoft(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
export function registerEmail(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Logout
export function logout(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Profile
export function profile(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Settings
export function settings(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}

// Search
export function search(terminalElement: HTMLElement | null) {
    if (terminalElement) {
        terminalElement.innerHTML += `
    <br>
    <br>Comming soon!
    `;
    }
}
