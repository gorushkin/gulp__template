import imagemin from 'gulp-imagemin';
import gulp from 'gulp';

import { paths } from './index.js';
const { src, dest } = gulp;

export const images = () =>
  src(paths.src.imgRaw)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(paths.src.imgOpt));
