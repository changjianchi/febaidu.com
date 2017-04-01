#!bin/sh
A="xielingjuan zhulei v_changjianchi chenrui"
AA=($A)
j=0
for file in *
do
    if test -f $file
    then
	BB[${j}]=${file%.*}
    else
        echo $file 是目录
    fi
    let "j++"
done
echo ${BB[@]}
