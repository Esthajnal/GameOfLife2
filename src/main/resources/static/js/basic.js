{

    function tablegenerator() {
            var htmlString ="<tbody><tr>";

            for (i = 0; i < 10; i++) {
                htmlString + "<td></td>";
            }
    			htmlString + "</tbody></tr>";
            document.getElementById("basictable").innerHTML = htmlString;

        }

}