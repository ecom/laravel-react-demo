<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'file_url_large', 'file_url_medium', 'file_url_small'
    ];

    /**
     * Get the user that owns the image.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * Get the large file url of the image.
     *
     * @return string
     */
    public function getFileUrlLargeAttribute()
    {
        return asset($this->attributes['file_path_large']);
    }

    /**
     * Get the medium file url of the image.
     *
     * @return string
     */
    public function getFileUrlMediumAttribute()
    {
        return asset($this->attributes['file_path_medium']);
    }

    /**
     * Get the small file url of the image.
     *
     * @return string
     */
    public function getFileUrlSmallAttribute()
    {
        return asset($this->attributes['file_path_small']);
    }
}
