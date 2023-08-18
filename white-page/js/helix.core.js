/**
 * @package Helix Framework
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2015 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/
spnoConflict((function(o){o(".sp-totop").on("click",(function(){o("html, body").animate({scrollTop:o("body").offset().top},500)})),o(".hasTip").tooltip({html:!0})}));