<?php get_header() ?>

<?php wp_list_categories(['taxonomy' => 'music', 'title_li' => '']); ?>

<?php if (have_posts()) : ?>
    <div class="row">
        <?php while (have_posts()) : the_post(); ?>
            <div class="col-sm-4">
                <div class="card">
                    <?php the_post_thumbnail('medium', ['class' => 'card-img-top', 'alt' => '', 'style' => 'height: auto;']) ?>
                    <div class="card-body">
                        <h5 class="card-title"><?php the_title() ?></h5>
                        <ul>
                            <?php
                            the_terms(get_the_ID(), 'music', '<li>', '</li><li>', '</li>');
                            ?>
                            <p class="card-text"><?php the_content() ?></p>

                    </div>
                </div>
            </div>
        <?php endwhile ?>

    </div>

    <?php maxendre_pagination() ?>


<?php else : ?>
    <h1>Pas d'articles</h1>
<?php endif; ?>

<?php get_footer() ?>