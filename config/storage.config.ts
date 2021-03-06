export const StorageConfig = {
    /*
    photoDestination: '../storage/photos/',
    photoMaxFileSize: 1024 * 1024 * 3, // u bajtovima - 3mb
    photoThumbSize: { width: 120, height: 100},
    photoSmallSize: { width: 320, height: 240},
    */
   
    photo: {
        destination: '../storage/photos/',
        maxSize: 3 *1024 * 1024,
        resize: {
            thumb: {
                width: 120,
                height: 100,
                directory: 'thumb/'
            },
            small: {
                width:320,
                height: 240,
                directory: 'small/'
            }
        }
    }
};

