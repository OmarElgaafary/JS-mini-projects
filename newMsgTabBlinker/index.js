let messages = 2;
let blinked = false;


const checkMessages = () => {

    setInterval(
        () => {
                if (messages <= 0)
                    return

            const title = String(document.title);

            if (!blinked) {
                document.title = `(${messages}) ` + title;
                blinked = true;
            }
            else {
                let length = `(${messages}) `.length;
                if (title.includes(`(${messages})`)) {
                    document.title = title.slice(length)
                }
                blinked = false;

            }
        }, 1000);
}

function increment()
{
    let title = document.title;
    if (title.includes(`(${messages})`))
        return
    else
        messages++;
}

function decrement()
{
    let title = document.title;
    if (title.includes(`(${messages})`))
        return
    else
        messages--;
}


let intervalID;

checkMessages();
