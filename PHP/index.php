<?php
class A
{
    public function __invoke()
    {
        print(6);
    }
    public $x;
}

new A();
echo 5;
