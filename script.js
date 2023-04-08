function addDownloadButton() {

    // fetch element which holds buttons (like, dislike, share, etc.) so we can use that
    // div to add our download button there
    let buttons = document.getElementById('actions');

    if (buttons) {
        let downloadButton = document.createElement('a');
        buttons.append(downloadButton);

        downloadButton.outerHTML = '<a id="mp3-btn">' +
            '<img width="36px" style="margin: 4px 10px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PgoNPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgaWQ9InN2ZzUiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxkZWZzIGlkPSJkZWZzMiIvPgoNPGcgaWQ9ImxheWVyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4NCwtMzg0KSI+Cg08cGF0aCBkPSJtIDM5My45OTk5OSwzOTMgaCA0OSB2IDYgaCAtNDkgeiIgaWQ9InBhdGgyNzAxMSIgc3R5bGU9ImZpbGw6IzNlNGY1OTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NC4xIi8+Cg08cGF0aCBkPSJtIDM5My45OTk5OSwzOTkgaCA0OSB2IDQwIGggLTQ5IHoiIGlkPSJwYXRoMjcwMTMiIHN0eWxlPSJmaWxsOiNhY2JlYzI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLXdpZHRoOjIuMDAwMDE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQuMSIvPgoNPHBhdGggZD0ibSAzOTMuOTk5OTksMzk5IHYgNDAgaCAyOS43Njk1MyBhIDI4LjQ4NDA1MSw0MS4zOTI2MDUgMzUuNTk5NDgyIDAgMCAxOC42MjUsLTQwIHoiIGlkPSJwYXRoMjcwMTUiIHN0eWxlPSJmaWxsOiNlOGVkZWU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjIuMDAwMDI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQuMSIvPgoNPHBhdGggZD0ibSAzOTUuOTk5OTksMzkyIGMgLTEuNjQ1MDEsMCAtMywxLjM1NSAtMywzIHYgNDAgYyAwLDAuNTUyMjkgMC40NDc3MiwxIDEsMSAwLjU1MjI5LDAgMSwtMC40NDc3MSAxLC0xIHYgLTQwIGMgMCwtMC41NjQxMyAwLjQzNTg3LC0xIDEsLTEgaCA0NSBjIDAuNTY0MTMsMCAxLDAuNDM1ODcgMSwxIHYgMyBoIC00MiBjIC0wLjU1MjI4LDAgLTEsMC40NDc3MiAtMSwxIDAsMC41NTIyOSAwLjQ0NzcyLDEgMSwxIGggNDIgdiAzNyBjIDAsMC41NjQxMyAtMC40MzU4NywxIC0xLDEgaCAtNDkgYyAtMC41NTIyOCwwIC0xLDAuNDQ3NzIgLTEsMSAwLDAuNTUyMjkgMC40NDc3MiwxIDEsMSBoIDQ5IGMgMS42NDUwMSwwIDMsLTEuMzU0OTkgMywtMyAwLC0xNCAwLC0yOCAwLC00MiAwLC0xLjY0NSAtMS4zNTQ5OSwtMyAtMywtMyB6IiBpZD0icGF0aDI3MDE3IiBzdHlsZT0iY29sb3I6IzAwMDAwMDtmaWxsOiMwMDAwMDA7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQuMSIvPgoNPHBhdGggZD0ibSA0MzguOTk5OTksMzk1IGMgLTAuNTUyMjgsMCAtMSwwLjQ0NzcyIC0xLDEgMCwwLjU1MjI5IDAuNDQ3NzIsMSAxLDEgMC41NTIyOSwwIDEsLTAuNDQ3NzEgMSwtMSAwLC0wLjU1MjI4IC0wLjQ0NzcxLC0xIC0xLC0xIHoiIGlkPSJwYXRoMjcwMTkiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZpbGw6I2VkNzE2MTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NC4xOy1pbmtzY2FwZS1zdHJva2U6bm9uZSIvPgoNPHBhdGggZD0ibSA0MzQuOTk5OTksMzk1IGMgLTAuNTUyMjgsMCAtMSwwLjQ0NzcyIC0xLDEgMCwwLjU1MjI5IDAuNDQ3NzIsMSAxLDEgMC41NTIyOSwwIDEsLTAuNDQ3NzEgMSwtMSAwLC0wLjU1MjI4IC0wLjQ0NzcxLC0xIC0xLC0xIHoiIGlkPSJwYXRoMjcwMjEiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZpbGw6I2VjYmExNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NC4xOy1pbmtzY2FwZS1zdHJva2U6bm9uZSIvPgoNPHBhdGggZD0ibSA0MzAuOTk5OTksMzk1IGMgLTAuNTUyMjgsMCAtMSwwLjQ0NzcyIC0xLDEgMCwwLjU1MjI5IDAuNDQ3NzIsMSAxLDEgMC41NTIyOSwwIDEsLTAuNDQ3NzEgMSwtMSAwLC0wLjU1MjI4IC0wLjQ0NzcxLC0xIC0xLC0xIHoiIGlkPSJwYXRoMjcwMjMiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZpbGw6IzQyYjA1YztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NC4xOy1pbmtzY2FwZS1zdHJva2U6bm9uZSIvPgoNPHBhdGggZD0ibSAzODguOTk5OTksNDM4IGEgMSwxIDAgMCAwIC0xLDEgMSwxIDAgMCAwIDEsMSAxLDEgMCAwIDAgMSwtMSAxLDEgMCAwIDAgLTEsLTEgeiIgaWQ9InBhdGgyNzAyNSIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojMDAwMDAwO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjE7LWlua3NjYXBlLXN0cm9rZTpub25lIi8+Cg08cGF0aCBkPSJtIDM5Ni45OTk5OSwzOTggYyAtMC41NTIyOCwwIC0xLDAuNDQ3NzIgLTEsMSAwLDAuNTUyMjkgMC40NDc3MiwxIDEsMSAwLjU1MjI5LDAgMSwtMC40NDc3MSAxLC0xIDAsLTAuNTUyMjggLTAuNDQ3NzEsLTEgLTEsLTEgeiIgaWQ9InBhdGgyNzAyNyIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojMDAwMDAwO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjE7LWlua3NjYXBlLXN0cm9rZTpub25lIi8+Cg08ZyBpZD0iZzI1NjQ1IiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwyNS4yNjU2Miw4MzgpIj4KDTxwYXRoIGQ9Im0gMzgyLjczNDM4LDQwNyBoIDIwLjk5OTk0IHYgNCBoIC0yMC45OTk5NCB6IiBpZD0icGF0aDI1NjI3IiBzdHlsZT0iZmlsbDojZmZhMjIxO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjEiLz4KDTxwYXRoIGQ9Im0gMzgyLjczNDM4LDQwNyB2IDEuOTA2MjUgYSAxLjk3NjM0NDYsMS45NzYzNDQ2IDAgMCAwIDAuNjI2OTUsMC4xMTUyMyBoIDE3LjA0Njg4IGEgMS45NzYzNDQ2LDEuOTc2MzQ0NiAwIDAgMCAxLjk3NjU2LC0xLjk3NjU2IFYgNDA3IFoiIGlkPSJwYXRoMjU2MjkiIHN0eWxlPSJmaWxsOiNmZmMzNDM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQuMSIvPgoNPHBhdGggZD0iTSAzOTMuMTg2MjcsNDE0LjM5ODk2IDM4Ny4yMzQyOSw0MjEgaCAzLjUwMDAzIHYgMTAgaCA1IHYgLTEwIGggMy40OTk5NyB6IiBpZD0icGF0aDI1NjMxIiBzdHlsZT0iZmlsbDojMDA3NWQzO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjEiLz4KDTxwYXRoIGQ9Ik0gMzg5LjI0NjEsNDE4Ljc2NzU4IDM4Ny4yMzQzOCw0MjEgaCAzLjUgdiAxMCBoIDQuMzU1NDcgYSA2LjU3OTQwMzQsMTAuNzAzNzI2IDAgMCAwIDAuMDgwMSwtMS41ODM5OCA2LjU3OTQwMzQsMTAuNzAzNzI2IDAgMCAwIC01LjkyMzgzLC0xMC42NDg0NCB6IiBpZD0icGF0aDI1NjMzIiBzdHlsZT0iZmlsbDojMDU4OGUyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjEiLz4KDTxwYXRoIGQ9Im0gMzkzLjE4MTY1LDQxMy4zOTg0NCBjIC0wLjI4MTU5LDAuMDAxIC0wLjU0OTY0LDAuMTIxMDIgLTAuNzM4MjksMC4zMzAwOCBsIC01Ljk1MTE3LDYuNjAxNTYgYyAtMC41ODAxLDAuNjQzMTggLTAuMTIzOTUsMS42Njk1MSAwLjc0MjE5LDEuNjY5OTIgaCAyLjUgYyAwLDMgMCw2IDAsOSA2ZS01LDAuNTUyMjYgMC40NDc3NCwwLjk5OTk0IDEsMSBoIDUgYyAwLjU1MjI2LC02ZS01IDAuOTk5OTQsLTAuNDQ3NzQgMSwtMSB2IC05IGggMi41IGMgMC44Njk2NCwtOC43ZS00IDEuMzIzODcsLTEuMDM0NjMgMC43MzYzMywtMS42NzU3OCBsIC0yLjMwNDY5LC0yLjUxNzU4IGMgLTAuMzczNTQsLTAuNDA3NjYgLTEuMDA3MDEsLTAuNDM0OCAtMS40MTQwNiwtMC4wNjA2IC0wLjQwNjM3LDAuMzczMzUgLTAuNDMzNDksMS4wMDUzMiAtMC4wNjA2LDEuNDEyMTEgTCAzOTYuOTYyOSw0MjAgaCAtMS4yMjg1MiBjIC0wLjU1MjI2LDZlLTUgLTAuOTk5OTQsMC40NDc3NCAtMSwxIHYgOSBoIC0zIGMgMCwtMyAwLC02IDAsLTkgLTZlLTUsLTAuNTUyMjYgLTAuNDQ3NzQsLTAuOTk5OTQgLTEsLTEgaCAtMS4yNTE5NSBsIDMuNzEwOTMsLTQuMTEzMjggMC44MDQ2OSwwLjg3ODkgYyAwLjM3MzM4LDAuNDA2MzQgMS4wMDUzNCwwLjQzMzQyIDEuNDEyMTEsMC4wNjA1IDAuNDA2OTMsLTAuMzcyODEgMC40MzQ5LC0xLjAwNDggMC4wNjI1LC0xLjQxMjExIGwgLTEuNTQ4ODMsLTEuNjkxNCBjIC0wLjE5MDYxLC0wLjIwNzg5IC0wLjQ2MDE0LC0wLjMyNTY0IC0wLjc0MjE4LC0wLjMyNDIyIHoiIGlkPSJwYXRoMjU2MzUiIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZpbGw6IzAwMDAwMDtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NC4xOy1pbmtzY2FwZS1zdHJva2U6bm9uZSIvPgoNPHBhdGggZD0ibSAzODIuNzM0MzgsNDA2IGEgMS4wMDAxLDEuMDAwMSAwIDAgMCAtMSwxIHYgNCBhIDEuMDAwMSwxLjAwMDEgMCAwIDAgMSwxIGggMTQuOTc0NjEgYSAxLDEgMCAwIDAgMSwtMSAxLDEgMCAwIDAgLTEsLTEgaCAtMTMuOTc0NjEgdiAtMiBoIDAuOTY2OCBhIDEsMSAwIDAgMCAxLC0xIDEsMSAwIDAgMCAtMSwtMSB6IG0gNiwwIGEgMSwxIDAgMCAwIC0xLDEgMSwxIDAgMCAwIDEsMSBoIDE0IHYgMiBoIC0xLjAyMzQ0IGEgMSwxIDAgMCAwIC0xLDEgMSwxIDAgMCAwIDEsMSBoIDIuMDIzNDQgYSAxLjAwMDEsMS4wMDAxIDAgMCAwIDEsLTEgdiAtNCBhIDEuMDAwMSwxLjAwMDEgMCAwIDAgLTEsLTEgeiIgaWQ9InBhdGgyNTYzNyIgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZmlsbDojMDAwMDAwO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjE7LWlua3NjYXBlLXN0cm9rZTpub25lIi8+Cg08L2c+Cg08L2c+Cg08L3N2Zz4=">' +
            '</a>'

        let downloadUrl = 'yt2mp3app://' + document.URL
        document.getElementById('mp3-btn').setAttribute('href', downloadUrl)
    }
}


// since this script will be injected each time history state is updated in chrome
// it means it might have this script injected already, and the browser could have intervalId
// already initialized from before. If that is the case, just reuse that variable
if (typeof intervalId === 'undefined') {
    var intervalId;
}

// if it doesn't do full redirect, it might have our previous button still there
if (document.getElementById('mp3-btn')) {
    document.getElementById('mp3-btn').remove()
}

// have interval to try until our wanted div is finally rendered in there
intervalId = setInterval(function () {
    if (!document.getElementById('mp3-btn'))
        addDownloadButton()
    else {
        clearInterval(intervalId)
    }
}, 1000)

// clear interval after 5 seconds just for case
setTimeout(function () {
    clearInterval(intervalId);
}, 5000)