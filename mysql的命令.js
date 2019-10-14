/*# mysql数据库，是当前应用非常广泛的一款关系型数据库。
　　# 优点：持久化存储，优化读写，保证数据的有效性

# E-R关系模型
　　# E表示entry，实体 （表的类）
　　# R表示relationship,关系(任何事物之间都有直接或者间接的联系)
　　# 一个实体转换为数据库中的一个表
　　# 关系描述两个实体之间的对应规则，包括
　　　　# 一对一
　　　　# 一对多
　　　　# 多对多

# 数据库的3范式
　　# 第一范式(1NF):列不可拆分
　　# 第二范式(2NF):唯一标识
　　# 第三范式(3NF):引用主键
　　　　# 后一个范式，都是在前一个范式基础上建立起来的

# 主要操作包括：
　　# 数据库的操作，包括创建，删除
　　# 表的操作，包括创建，修改，删除
　　# 数据的操作，包括增加，修改，删除，查询，简称crud

# 学生表
　　# id
　　# 姓名
　　# 性别
　　# 地址
　　# 生日

# 科目表结构
　　# id
　　# 名称

# 数据完整性
　　# 在mysql中包括的数据类型很多
　　　　# 数字：int,decimal(浮点型)
　　　　　　# decimal(5,2) 一共包含5位数，小数两位
　　　　# 字符串：
　　　　　　# char 存的字符是固定的
　　　　　　# varchar 存的字符是不固定的 
　　　　　　# text
　　　　　　　　# 编码
　　　　　　　　　　# gb2312 中国大陆编码
　　　　　　　　　　# utf8 国际通用标准
　　　　# 日期：
　　　　　　# datetime
　　　　# 布尔：
　　　　　　# bit
　　　　　　　　# 性别


# 约束
　　# 主键 primary key
　　# 非空 not null
　　# 唯一 unique
　　# 默认 default
　　# 外键 foreign key

 

# 逻辑删除(isDelete,DeleteFlag)
　　# 对于重要数据,并不希望物理删除,一旦删除,数据无法找回
　　# 一般对于重要数据,会设置一个isDelete的列,类型为bit,表示逻辑删除
　　# 大于大量增长的非重要数据,可以进行物理删除
　　# 数据的重要性,要根据实际开发决定


# 打开cmd终端,运行命令:
　　# mysql -uroot -p
　　# Enter password: ****

　　# 数据库库的操作
　　　　# 查看当前的版本
　　　　　　# select version()
　　　　#显示当前时间
　　　　　　# select now()

　　　　# 查看所有的数据库
　　　　　　# show databases;
　　　　# 创建数据库
　　　　　　# create database 数据库名 charset=utf8
　　　　# 删除数据库
　　　　　　# drop database 数据库名
　　　　# 切换数据库
　　　　　　# use 数据库名
　　　　# 查看当前选择的数据库
　　　　　　# select database();

　　# 表的操作

　　　　# 查看当前所有的表
　　　　　　# show tables;

　　　　# 创建表
　　　　　　# 自动增长 auto_increment
　　　　　　# create table 表名(列及类型);
　　　　　　　　# create table student(
　　　　　　　　　　# id int auto_increment primary key not null,
　　　　　　　　　　# name varchar(10) not null,
　　　　　　　　　　# gender bit default 1,
　　　　　　　　　　# birthday datetime
　　　　　　　　# );
　　　　　　# 查看表结构
　　　　　　　　# desc 表名
　　　　　　# 删除表 
　　　　　　　　# drop table 表名;
　　　　　　# 修改表
　　　　　　　　# alter table 表名 add|change|drop 列名 类型;
　　　　　　# 更改表名称
　　　　　　　　# rename table 原表名 to 新表名
　　　　　　# 查看表的创建语句
　　　　　　　　# show create table 表名

　　　　# 数据操作
　　　　　　# 查询
　　　　　　　　# select * from 表名
　　　　　　# 增加
　　　　　　　　# 全列插入
　　　　　　　　　　# insert into students values(0,'东邪黄药师',1975-1-1,1,0)

　　　　　　　　# 针对字段插入
　　　　　　　　　　# insert into students(name,birthday) values('西毒欧阳锋','1975-01-01')

　　　　　　　　# 同时插入多条数据
　　　　　　　　　　# insert into students values(...),(...)或 insert into students(name,gender) values('南帝段王爷',1),('北丐洪七公',1)

　　　　　　# 修改
　　　　　　　　# update students set birthday='1990-2-2',gender=0 where id=9;

　　　　　　# 删除
　　　　　　　　　# delete from students where id=3


# 查询
　　# select * from 表名

# 消除重复行
　　# 在select后面列前使用distinct可以消除重复行
　　　　# select distinct gender from students;


　　# select * from 表名 where
　　# 比较运算符
　　　　# 等于 =
　　　　# 大于 >
　　　　# 大于等于 >=
　　　　# 小于 <
　　　　# 小于等于 <=
　　　　# 不等于 !=或<>

　　　　　　# 查询科目不大于4的科目
　　　　　　　　# select * from subjects where id<=4

　　　　　　# 查询姓名不是黄蓉的学生
　　　　　　　　# select * from students where name!='黄蓉'

　　　　　　# 查询没有被删除的姓名
　　　　　　　　# select * from students where isDelete=0；

　　　　# 逻辑运算符
　　　　# and 
　　　　# or
　　　　# not

　　　　　　# 查询大于三的女同学
　　　　　　　　# select * from students where id>3 and gender=0;

　　　　　　# 查询编号小于4或没有被删除的同学
　　　　　　　　# select * from students where id<4 or isDelete=0;

　　　　# 模糊查询
　　　　# like
　　　　# %表示任意多个字符
　　　　# _表示一个任意字符

　　　　　　# 查询姓黄的学生
　　　　　　　　# select * from students where name like '黄%';
　　　　　　　　# select * from students where name like '黄_'; 
　　　　　　# 查询姓黄的或者带靖的学生
　　　　　　　　# select * from students where name like '黄%' or name like '%靖%';

　　　　# 范围查询
　　　　# in表示在一个非连续的范围内

　　　　　　# 查询编号是1或者3或者8的学生
　　　　　　　　# select * from students where id in(1,3,8);

　　　　　　# 查询编号3到8的学生
　　　　　　　　# select * from students where id between 3 and 8;

　　　　　　# 查询编号是3到8的男生
　　　　　　　　# select * from students where id between 3 and 8 and gender=1;


　　　　# 空判断
　　　　# null与''是不同的
　　　　# 判空 is null
　　　　# 判断非空 is not null

　　　　　　# 生日是空的
　　　　　　　　# select * from students where birthday is null;

　　　　　　# 生日不为是空的女生
　　　　　　　　# select * from students where birthday is not null and gender=0;


　　# 优先级
　　　　# 小括号，not 比较运算符，逻辑运算符
　　　　# and比or先运算，如果同时出现并希望先算or，需要结合()使用

 

# 聚合
　　# 为了快速得到统计数据，提供5个聚合函数

　　# count(*)表示计算总行数
　　　　# 查询学生总数
　　　　　　# select count(*) from students where isDelete=0;

　　# max(列)表示求此列的最大值
　　　　# 查询女生的编号最大值
　　　　　　# select max(id) from students where gender=0;

　　# min(列)表示求此列的最小值
　　　　# 查询未删除编号最小值
　　　　　　# select min(id) from students where isDelete=0;
　　　　　　# select * from students where id=(select min(id) from students where isDelete=0);

　　# sum(列)表示求此列的和
　　　　# 查询男生的和
　　　　　　# select sum(id) from students where gender=1;


　　# avg(列)表示求此列的平均值
　　　　# 查询未删除女生的平均值
　　　　　　# select avg(id) from students where isDelete=0;


# 分组
　　# 按照字段分组,表示此字段相同的数据会被放到一个数组中
　　　　# select 列1,列2,聚合 from group by 列1,列2
　　　　　　# 查询男女生总数
　　　　　　　　# select gender as 性别,count(*) from students group by gender;

　　# 数据筛选
　　　　# having... 对分组后结果集筛选。
　　　　　　# 查询男生总数
　　　　　　　　# select gender,count(*) as re from students group by gender having gender=0;

　　　　　　# 对比where与having
　　　　　　　　# where是对from后面指定的表进行数据筛选，属于对原始集数据的筛选
　　　　　　　　# having是对group by的结果进行筛选。


# 排序
　　# 为了方便产看数据，可以对数据进行排序
　　# 语法:
　　　　# select * from 表名
　　　　# order by列1 asc（有小到大）|desc（由大到小),列2 asc（有小到大）|desc
　　　　# 默认按照列值由小到大

　　　　　　# 查询未删除的男生由大到小
　　　　　　　　# select * from students where isDelete=0 and gender=1 order by id desc;
　　　　　　# 查询未删除科目信息，按名称升序
　　　　　　　　# select * from subjects where isDelete=0 order by id asc;


# 分页
　　# 当数据量过大时，在一页中查看数据是一件麻烦的事情
　　# select * from 表名
　　# limit start,count

　　# 从start开始，获取count条数据
　　# start索引从0开始

　　　　# 已知：每页显示m条数据，当前显示第几页
　　　　# 求总页数，此逻辑会在后面的python中实现、
　　　　# 查询总条数p1
　　　　# 使用p1除以m达到p2
　　　　# 如果整除则p2为总数页
　　　　# 如果不整除则p2+1为总页数

　　　　# limit start,m

　　　　# m = 5

　　　　# n start
　　　　# 1 0
　　　　# 2 m
　　　　# 3 2m
　　　　# 4 3m
　　　　# n (n-1)m

　　　　　　# select * from students where isDelete=0 limit (n-1)*m,m

　　# 执行顺序
　　　　# from 表名
　　　　# where...
　　　　# group by...
　　　　# select distinct *
　　　　# having...
　　　　# order by...
　　　　# limit start,count

 

完整的select语句

　　select distinct * 

　　from  表名

　　where ......

　　group by ... having...

　　order by ...

　　limit start,count

 

# 实体与实体之间有3种对应关系，这些关系也需要存储下来
　　# 关系
　　　　# 1.试图用于完后曾查询语句的封装
　　　　# 2.事务可以保证复杂的增删改查操作有效
　　　　# 3.当数据巨大时，为了提高查询速度可以通过索引实现


# 创建scores，结构如下：
　　# id
　　# score
　　# 学生
　　# 科目
　　# create table scores(
　　　　# id int primary key auto_increment not null,
　　　　# score decimal(5,2),
　　　　# stuid int,
　　　　# subid int,
　　　　# foreign key(stuid) references students(id),
　　　　# foreign key(subid) references subjects(id)
　　# )


　　# 外键的级联操作

　　　　# 级联操作的类型包括：
　　　　　　# restrict(限制)：默认值，抛异常
　　　　　　# cascade(级联)：如果主表的记录删掉了，则从表种相关的数据都将被删除
　　　　　　# set null: 将外键设置为空
　　　　　　# no action： 什么都不做 

　　# 连接
　　　　# 链接查询
　　　　　　# 查询学生郭靖python科目的成绩
　　　　　　　　# select students.name,subjects.title,scores.score from scores inner join students on scores.stuid=students.id inner join subjects on scores.subid=subjects.id;

　　　　　　　　# select students.name,subjects.title,scores.score from students inner join scores on scores.stuid=students.id inner join subjects on scores.subid=subjects.id;


　　　　# 链接查询3种
　　　　　　# 表A inner join 表b; 表A与表B匹配的
　　　　　　# 表A left join 表b; 以左表的信息为准，外加表A中独有的数据，未对应的数据使用null填充
　　　　　　# 表A right join 表b; 以右表的信息为准，外加表B中独有的数据，未对应的数据使用null填充

　　　　　　# select name,avg(score) from scores 
　　　　　　# inner join students on scores.stuid=students.id
　　　　　　# group by stuid;

 

# select distinct 列*
# from inner|left|right join 表2 on 表1与表2的关系
# where 比较运算符(>,>=,<,<=,=,!=,<>)，逻辑运算符（and,or,not），空判断，模糊查询（like）
# group by ... (聚合) 属性 having 属性=值.
# order by ... (排序) asc | desc
# limit start,count




# 视图
# 对于复杂的查询，在多次使用后，维护是一个非常麻烦的事情
# 解决：定义视图
# 视图本质就是对查询的一个封装
# 定义视图

# create view v_stu_sub_sco as
# select students.*,scores.score,subjects.title from scores inner join students on students.id=scores.stuid
# inner join subjects on subjects.id=scores.subid


# 事务
# 当一个业务逻辑需要多个sql完成是，如果其中某条sql语句出错，则希望整个操作都退回
# 使用事务可以完成退回的功能，保证业务逻辑的正确性
# 事务四大特性(简称ACID)
# 原子性（Atomicity）: 事务中的全部操作在数据库中是不可分割的，要么全部完成，要么均不执行。
# 一致性（Consistency）：几个并行的事务，其执行结果必须与按某一顺序串行执行的结果一致。
# 隔离性（Isolation）：事务的执行不受其他事务的干扰，事务执行的中间结果对其他事务必须是透明的
# 持久性（Durability）:对于任意已提交事务，系统必须保证该事务对数据库的改变不被丢失，即使数据库出现故障。

# 要求：表的类型必须是innodb或bdb类型，下可以对此表使用事务

# 保证一个业务的完整性

 


# 查看表的创建语句
# show create table 表名

# # 修改表的类型
# alter table '表名' engine=innodb

# 事务语句
# 开启begin
# 提交commit
# 回滚rollback


# 使用事务的情况，当数据更改是，包括insert、update、delete


# 索引

# 当数据库中的数据很大时，查找数据会变的很慢
# 索引能提高数据访问性能
# 逐渐和唯一索引，都是索引，可以提高查询速度


# 选择列的数据类型
# 越小的数据类型通常更好，越小的数据类型通常再磁盘/内存和cpu缓存中国都需要更小的空间，处理起来更快。
# 简单的数据类型更好，整形数据比起字符，处理开销更小，因为字符串的比较更复杂
# 尽量避免NULL，应该制定列为NOT NULL，除非你想存NULL，
# 在mysql中，含有空值的列很难进行查询优化，因为他们是的索引，索引的统计信息以及及比较运算更加复杂。你应该用0/一个特殊的值或者一个空串代替空值

# 操作
# 索引分 单列索引和 组合索引
# 单例索引：即一个索引只包含单个列，一个表可以有多个单利索引，但这不是组合索引
# 组合索引:即一个索包含多个列

# 产看索引
# show index from 表明
# 创建索引
# create index indexName on mytable(username(length));


# 删除索引
# drop index [index] on mytable

 


# 查看时间
# show profiles

# 开启运行时间检测
# set profiling=1;

# select * from areas where title="山西"

# show profiles

# 为表areas的atitle列创建索引
# create index titleIndex on areas(title(20));

# select * from areas where title="山西"

# show profiles



