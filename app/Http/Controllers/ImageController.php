<?php

namespace App\Http\Controllers;

use App\Image;
use Gmagick;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Image::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'image' => 'required|image|max:10240',
            'x' => 'required_with_all:y,width,height|integer',
            'y' => 'required_with_all:x,width,height|integer',
            'width' => 'required_with_all:x,y,height|integer',
            'height' => 'required_with_all:x,y,width|integer',
        ]);

        $image = new Image;
        $image->user_id = $request->user()->id;

        $path = $request->image->path();
        $extension = '.' . $request->image->extension();
        if ($extension === '.jpeg') {
            $extension = '.jpg';
        }

        $image_full = new Gmagick($path);

        if ($request->has(['x', 'y', 'width', 'height'])) {
            $image_full = $image_full->cropimage($request->x, $request->y, $request->width, $request->height);
        }

        $height = $image_full->getimageheight();
        $width = $image_full->getimagewidth();
        $uuid = Str::uuid();

        $image_small = clone $image_full;
        if ($height > 900 || $width > 900) {
            $image_small->thumbnailimage(600, 600, true);
        } else {
            $image_small->thumbnailimage($width, $height, true);
        }
        $image->file_path_small = 'images/' . $uuid . '_s' . $extension;
        Storage::put($image->file_path_small, $image_small);

        $image_medium = clone $image_full;
        if ($height > 1800 || $width > 1800) {
            $image_medium->thumbnailimage(1200, 1200, true);
        } else {
            $image_medium->thumbnailimage($width, $height, true);
        }
        $image->file_path_medium = 'images/' . $uuid . '_m' . $extension;
        Storage::put($image->file_path_medium, $image_medium);

        $image_large = clone $image_full;
        if ($height > 3600 || $width > 3600) {
            $image_large->thumbnailimage(2400, 2400, true);
        } else {
            $image_large->thumbnailimage($width, $height, true);
        }
        $image->file_path_large = 'images/' . $uuid . '_l' . $extension;
        Storage::put($image->file_path_large, $image_large);

        $image->save();

        return $image;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        return $image;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        return $image;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        Storage::delete([
            $image->file_path_large,
            $image->file_path_medium,
            $image->file_path_small,
        ]);
        $image->delete();
        return $image;
    }
}
