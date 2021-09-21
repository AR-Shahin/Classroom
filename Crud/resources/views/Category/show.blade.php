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
    <h3 class="text-center">Create Category</h3>
    <a href="{{ route('category.index') }}" class="btn btn-info">Back</a>
    <div class="row mt-5 justify-content-center">
        <div class="col-10">
{{ $category->name }}
        </div>
    </div>
</div>
</body>
</html>
