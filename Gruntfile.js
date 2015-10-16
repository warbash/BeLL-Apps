module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            //Concatenating the Community files here
            distCommViews: {
                src: ['app/MyApp/app/views/*.js'],
                dest: 'app/MyApp/app/combined_views.js'
            },
            distCommModels: {
                src: ['app/MyApp/app/models/*.js'],
                dest: 'app/MyApp/app/combined_models.js'
            },
            distCommCollections: {
                src: ['app/MyApp/app/collections/*.js'],
                dest: 'app/MyApp/app/combined_collections.js'
            },
            //End Community Concatenation
            //Concatenating the Nation files here
            distNationViews: {
                src: ['app/nation/app/views/*.js'],
                dest: 'app/nation/app/combined_views.js'
            },
            distNationModels: {
                src: ['app/nation/app/models/*.js'],
                dest: 'app/nation/app/combined_models.js'
            },
            distNationCollections: {
                src: ['app/nation/app/collections/*.js'],
                dest: 'app/nation/app/combined_collections.js'
            }
            //End Nation Concatenation
        },

        uglify: {
            //Minifying Community files here
            buildCommViews: {
                src: 'app/MyApp/app/combined_views.js',
                dest: 'app/MyApp/app/combined_views_min.js'
            },
            buildCommModels: {
                src: 'app/MyApp/app/combined_models.js',
                dest: 'app/MyApp/app/combined_models_min.js'
            },
            buildCommCollections: {
                src: 'app/MyApp/app/combined_collections.js',
                dest: 'app/MyApp/app/combined_collections_min.js'
            },
            buildCommApp: {
                src: 'app/MyApp/app/App.js',
                dest: 'app/MyApp/app/App_min.js'
            },
            buildCommRouter: {
                src: 'app/MyApp/app/Router.js',
                dest: 'app/MyApp/app/Router_min.js'
            },
            buildCommIndexFile: {
                src: 'app/MyApp/indexFile.js',
                dest: 'app/MyApp/indexFile_min.js'
            },
            //End Community Minification
            //Minifying Nation files here
            buildNationViews: {
                src: 'app/nation/app/combined_views.js',
                dest: 'app/nation/app/combined_views_min.js'
            },
            buildNationModels: {
                src: 'app/nation/app/combined_models.js',
                dest: 'app/nation/app/combined_models_min.js'
            },
            buildNationCollections: {
                src: 'app/nation/app/combined_collections.js',
                dest: 'app/nation/app/combined_collections_min.js'
            },
            buildNationApp: {
                src: 'app/nation/app/App.js',
                dest: 'app/nation/app/App_min.js'
            },
            buildNationRouter: {
                src: 'app/nation/app/Router.js',
                dest: 'app/nation/app/Router_min.js'
            }
            //End Nation Minification
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['concat:distCommViews', 'concat:distCommModels', 'concat:distCommCollections', 'concat:distNationViews', 'concat:distNationModels', 'concat:distNationCollections',
        'uglify:buildCommViews', 'uglify:buildCommModels', 'uglify:buildCommCollections', 'uglify:buildCommApp', 'uglify:buildCommRouter', 'uglify:buildCommIndexFile',
        'uglify:buildNationViews', 'uglify:buildNationModels', 'uglify:buildNationCollections', 'uglify:buildNationApp', 'uglify:buildNationRouter']);

};