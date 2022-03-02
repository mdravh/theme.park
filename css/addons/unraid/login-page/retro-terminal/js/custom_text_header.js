
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
_____.___.                 .___                    .__.__   
\__  |   | ____   ____   __| _/___________    _____|__|  |  
 /   |   |/ ___\ / ___\ / __ |\_  __ \__  \  /  ___/  |  |  
 \____   / /_/  > /_/  > /_/ | |  | \// __ \_\___ \|  |  |__
 / ______\___  /\___  /\____ | |__|  (____  /____  >__|____/
 \/     /_____//_____/      \/            \/     \/         
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
