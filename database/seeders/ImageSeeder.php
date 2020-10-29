<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $unsplash_image_ids = [
            // 50 people photos
            'mEZ3PoFGs_k',
            'ILip77SbmOE',
            '3TLl_97HNJo',
            'QXevDflbl8A',
            '5aGUyCW_PJw',
            'u3WmDyKGsrY',
            'O3ymvT7Wf9U',
            'khV4fTy6-D8',
            'cdksyTqEXzo',
            'X6Uj51n5CE8',
            'B4TjXnI0Y2c',
            'ZXfUUM_LR0k',
            'DLKR_x3T_7s',
            'PY2lJbqsJzU',
            'XhMSz5I1kn8',
            'COgbRUTvL-s',
            'f2ar0ltTvaI',
            'kOnmHdLJTNI',
            'scBTgeG5K5c',
            'kEXMAGTivXA',
            'HnQe_DNq1Z0',
            '155huuQwGvA',
            '-lYtsl62gyU',
            'Mn1Uopx7if8',
            'Kt8eGw8_S8Y',
            '470eBDOc8bk',
            'C5NOq1BKlAk',
            'dq7Wlq_evnc',
            'veB8-OSCyM4',
            'tDEpILVozEA',
            'ti3Hw9fxOgE',
            'OYH7rc2a3LA',
            '9Mj9FTg1zIo',
            'i4OHxtxiMtk',
            'DlCjD1RdQnE',
            'RrD8ypt8cjY',
            'u6LGX2VMOP4',
            'p63g4kQAt_4',
            'Vj2zHsZ1uqw',
            'qPKj1LSZQUY',
            '42e14e_DSWE',
            'Zg14Kx1XVsc',
            'cGqg8Bx2Kbw',
            'YdoEhMFA4MU',
            'c7TBD3PvoaQ',
            'SvKJUXV_5cQ',
            '4B6-E8c7t9I',
            '7AmZZV9LzBk',
            'iSmTwuKTNDo',
            'lbH45qxg1Lg',
        ];

        foreach ($unsplash_image_ids as $image_id) {
            $url = 'https://source.unsplash.com/' . $image_id;
            $file_path = 'images/' . $image_id . '.jpg';
            if (Storage::missing($file_path)) {
                Storage::put($file_path, file_get_contents($url));
            }
            Image::factory(1)->create([
                'file_path_large' => $file_path,
                'file_path_medium' => $file_path,
                'file_path_small' => $file_path,
            ]);
        };
    }
}
