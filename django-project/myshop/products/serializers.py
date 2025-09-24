from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

        # price validation
        def validate_price(self, value):
            if value < 0:
                raise serializers.ValidationError("Price must be a positive number.")
            return value
        
        # name validation
        def validate_name(self, value):
            if not value.strip():
                raise serializers.ValidationError("Name cannot be empty.")
            return value

