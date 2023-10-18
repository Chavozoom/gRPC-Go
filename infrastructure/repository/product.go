package repository

import (
	"fmt"
	"github.com/chavozoom/gRPC-fullcycle/domain/model"
	"github.com/jinzhu/gorm"
)

type ProductRepositoryDb struct {
	Db *gorm.DB
}

func (t ProductRepositoryDb) Create(product *model.Product) (*model.Product, error) {
	err := t.Db.Create(product).Error
	if err != nil {
		return nil, err
	}
	return product, nil
}

func (t ProductRepositoryDb) FindProducts() ([]*model.Product, error) {
    var products []*model.Product
    if err := t.Db.Find(&products).Error; err != nil {
        return nil, fmt.Errorf("Error while querying: " + err.Error()) 
    }
    return products, nil
}
