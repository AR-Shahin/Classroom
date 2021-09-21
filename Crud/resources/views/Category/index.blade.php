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
    <h3 class="text-center">Category</h3>
    <a href="{{ route('logout') }}" class="btn btn-warning">Logout</a>
    <a href="{{ route('category.create') }}" class="btn btn-info">Create</a>
    <div class="row mt-5 justify-content-center">
        <div class="col-10">
            <table class="table table-bordered">
                <tr>
                    <th>Sl</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                @foreach ($categories as $category)
                    <tr>
                        <td>{{ $loop->index + 1 }}</td>
                        <td>{{ $category->name }}</td>
                        <td>
                            <a href="{{ route('category.show',$category->id) }}" class="btn btn-sm btn-success">View</a>
                            <a href="{{ route('category.edit',$category->id) }}" class="btn btn-sm btn-info">Edit</a>
                            <form action="{{ route('category.destroy',$category->id) }}" class="d-inline" method="post">
                                @csrf
@method('DELETE')                                <button class="btn btn-sm btn-danger">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
    </div>
</div>
</body>
</html>
