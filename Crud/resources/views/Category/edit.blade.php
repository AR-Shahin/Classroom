<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" >
    <title>Document</title>
</head>
<body>
<div class="container">
    <h3 class="text-center">Edit Category</h3>
    <a href="{{ route('category.index') }}" class="btn btn-info">Back</a>
    <div class="row mt-5 justify-content-center">
        <div class="col-10">
<form action="{{ route('category.update',$category->id) }}" method="POST">
    @method('PUT')
    @csrf
    <div class="form-group">
        <label for="">Category</label>
        <input type="text" class="form-control" name="name" placeholder="Category Name" value="{{ $category->name }}">
        @error('name')
        <span class="text-danger">{{ $message }}</span>
        @enderror
    </div>
    <br>
    <button class="btn btn-sm btn-success">Submit</button>
</form>
        </div>
    </div>
</div>
</body>
</html>
