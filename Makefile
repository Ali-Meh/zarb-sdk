
proto:
	grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:./src/grpc/proto \
	--grpc_out=./src/grpc/proto \
	-I ./src/grpc/proto \
	./src/grpc/proto/*.proto

# generate d.ts codes
	protoc \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--ts_out=./src/grpc/proto \
	-I ./src/grpc/proto \
	./src/grpc/proto/*.proto