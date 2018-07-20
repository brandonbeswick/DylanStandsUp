<?php 

get_header();
?>

<?php
if(have_posts()):
    while (have_posts()) : the_post(); 

    ?>




<div class="slider-box" id="home">
    
    <div class="slide active">
        <img src="http://dylanstandsup.com/wp-content/themes/dylans/img/dylanStart.jpg">
    </div>    
    <div class="slide">
        <img src="http://dylanstandsup.com/wp-content/themes/dylans/img/dylanStart2.jpg">
    </div>    
    <div class="slide">
        <img src="http://dylanstandsup.com/wp-content/themes/dylans/img/dylanStart3.jpg">
    </div>    
    <div class="slide">
        <img src="http://dylanstandsup.com/wp-content/themes/dylans/img/dylanStart4.jpg">
    </div>
    
    
</div>    
 
<div class="home-holder">

    <div class="container" >
        <h2>About Dylan</h2>
        <p>Dylan Vattelana is a comic based out of Richmond Virginia who has spent the past several years traveling around the surrounding areas preforming his unique brand of standup comedy. He has created this website with the hope that people who frequently ask about his performances to have a place to find all the information that they need! He can be seen frequently at Clubs like The Richmond and Virginia Beach Funny Bones, Cozzys Comedy Club in Newport News and Liberty Laughs in Fredericksburg. His quick witted style and jubilant attitude keeps audiences listening while his joke writing leaves them in stiches! He is a mainstay on the monthly Petersburg show at the Famous Wabi Sabi as well as all sorts of stand up and variety shows around Richmond Virginia. </p>
    </div>
    
</div>    
    
      
<div class="dates-holder" id="dates">

    <div class="container">
        <div class="calendar">
            <div class="calTitle">
                <h2>Upcoming Shows</h2>
            </div>
            <div class="calHead">
                <h4>Name</h4>
            </div>
            <div class="calHead">
                <h4>Time</h4>
            </div>
            <div class="calHead">
                <h4>Venue</h4>
            </div>

        </div>
    </div>
    
</div>    
    
<div class="blog-holder" id="blog">
    <div class="container">
        <h2>Dylan's Blog</h2>
 
            <?php dynamic_sidebar( 'new_widget_area' ); ?>
 
            <a href="http://dylanstandsup.com/blog/" class="more-blogs-front"><p>More Blog Posts</p></a>
    </div>    

</div>    
    
<div class="contact-holder" id="contact">

    <div class="container">
        
        <h3>Want to Reach Out!?</h3>
        <p> Here is how you do it. Press this button here to activate a link that will send an email right to Dylan!</p>
        
        <a href="mailto:dylanstandsup@gmail.com" class="emailTag">Email Dylan</a>
    </div>
    
</div>      

    <?php

    endwhile;

    else :
        echo '<p>No content found </p>';

    endif;
?>

<?php
get_footer();
            
?>