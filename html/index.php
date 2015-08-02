<?php
$title = 'Ciphers' ;
$js_scripts = array('functions.js') ;
include_once('project.php') ;
include_once($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>

    <div class="right">
      <h3>About this page</h3>
      <div class="blurb">
        <p>This is just a page of various ciphers.  They are not particularly secure, so don't use them for anything sensitive!</p>
      </div>
    </div>
    
    <div class="right">
      <h3>Rot13</h3>  
      <div class="blurb">
        <p><input type="text" id="input_rot13" value="" /><input type="submit" id="encrypt_rot13" value="Encrypt"/><br />
        <input type="text" id="output_rot13" value="" /></p>
      </div>
    </div>
    
    <div class="right">
      <h3>Holly cipher</h3>
      <div class="blurb center">
        <p>This was developed by a friend of mine.</p>
        <table>
          <tbody>
            <tr>
              <td>Character set</td>
              <td>
                <select id="select_holly_charset">
                  <option value="ASCII" selected="true">ASCII</option>
                  <option value="AZ">[A-Z]</option>
                </select>
               </td>
               <td><input type="checkbox" id="checkbox_holly_leadingWord" checked="false" />Use leading word (ASCII only)</td>
            </tr>
            <tr>
              <td>Displacement:</td>
              <td><input type="text" id="input_holly_d" value="0"/></td>
              <td></td>
            </tr>
            <tr>
              <td>Shift position:</td>
              <td><input type="text" id="input_holly_s" value="5"/></td>
              <td></td>
            </tr>
            <tr>
              <td>Input:</td>
              <td><input type="text" id="input_holly" value="" /></td>
              <td><input type="submit" id="encrypt_holly" value="Encrypt"/></td>
            </tr>
            <tr>
              <td>Output:</td>
              <td><input type="text" id="output_holly" value="" /></td>
              <td><input type="submit" id="decrypt_holly" value="Decrypt"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="right">
      <h3>Links</h3>  
      <div class="blurb">
        <ul>
          <li><a href="http://startpad.googlecode.com/hg/labs/js/enigma/enigma-sim.html">Enigma machine simulator</a></li>
          <li><a href="http://enigma.maths.org/content/cd-rom-challenge">Simon Singh's Enigma machine challenges</a></li>
      </div>
    </div>
    
<?php foot() ; ?>
