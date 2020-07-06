<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 50)->create()->each(function ($user) {
            $avatar_ids = [
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

            $avatar = new App\Image;
            $avatar->user_id = $user->id;
            $url = 'https://source.unsplash.com/' . $avatar_ids[$user->id - 1] . '/1800x2400';
            $file_path = 'images/' . Str::uuid() . '.jpg';
            Storage::put($file_path, file_get_contents($url));
            $avatar->file_path = $file_path;
            $avatar->file_path_large = $file_path;
            $avatar->file_path_medium = $file_path;
            $avatar->file_path_small = $file_path;
            $avatar->save();
            $user->avatar_id = $avatar->id;
            $user->portrait_id = $avatar->id;
            $user->save();
        });
    }
}
