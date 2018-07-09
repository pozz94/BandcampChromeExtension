function waitForVar(variable, callback)
{
    if (window[variable]!==undefined)
    {
        callback();
    }
    else
    {
        setTimeout(function() {
            waitForVar(variable, callback);
        }, 100);
    }
}

function extension()
{
    waitForVar("TralbumData", function(){
        let content = '';
        let quantity = document.createElement('div');

        if(TralbumData['packages'] != null && typeof TralbumData['packages'] !== "undefined")
        {
            TralbumData['packages'].forEach(element => {
                console.log(element['title'] + ': ' + element['quantity_available'] + ' copies still available  ');
                if (element['quantity_available'] == 1)
                    content += '<h3 class="tags-inline-label">' + element['title'] + ': ' + element['quantity_available'] + ' copy still available</h3>';
                else if(element['quantity_available'] == null)
                    content += '<h3 class="tags-inline-label">' + element['title'] + ': infinite copies could still be available as far as I know (couldn\'t read the number ;b)</h3>';
                else
                    content += '<h3 class="tags-inline-label">' + element['title'] + ': ' + element['quantity_available'] + ' copies still available</h3>';
            });

            quantity.innerHTML= '<h3 class="tags-inline-label">' + content + '</h3>';
            quantity.className = "remainingQuantity";
            quantity.style.width = "100vw";
            quantity.style.width = "auto";
            //quantity.style.position = "fixed";
            quantity.onload = function() {
                this.remove();
            };
            document.getElementById("name-section").appendChild(quantity);
        }
    });
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

window.addEventListener('load', extension());