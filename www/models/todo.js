
module.exports = function(sequelize , DataTypes){

    return sequelize.define('Employee',{
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len :[1,250]
            }
        },
        Address : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len :[1,250]
            }
        },
        Email : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len :[1,250]
            }
        },
        DOB : {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        Rent : {
            type: DataTypes.INTEGER,
            allowNull: true,
            
        }
    });
};