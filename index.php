<?php 

get_header();
?>
<div class="blog-bg">

    <h2>Dylan's Blog</h2>
    
<?php
if(have_posts()):
    while (have_posts()) : the_post(); 

    ?>

    <article class="post">
        <div class="post-head">
            <h3><a href="<?php the_permalink(); ?>" ><?php  the_title(); ?></a> </h3>
        <div class="mobile-thumb">
            <a href="<?php the_permalink(); ?>" >    <?php the_post_thumbnail(); ?></a>
        </div>
        
            <p class="post-info"> <?php the_time('F jS, Y'); ?> </p>
            <p>Posted in 
        
        <?php 
        
            $categories = get_the_category();
            $separator = ", ";
            $output = '';
            
            if($categories){
                
                foreach ($categories as $category){
                    $output .= '<a href="' . get_category_link($category->term_id) .'">' . $category->cat_name . '</a>' . $separator;
                }
                
                echo trim($output, $separator);
            }
            
        ?>
            <p><a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>"><?php the_author(); ?></a></p>
            </p>
        </div>


        <div class="post-text">
        <p>    
            <?php echo get_the_excerpt(); ?>
            <a href="<?php the_permalink(); ?>">Read More&raquo;</a>
        </p>

        </div>

    </article>

    <?php

    endwhile;

    else :
        echo '<h2>Coming Soon!</h2>';

    endif;
?>
</div>
<?php
get_footer();
            
?>