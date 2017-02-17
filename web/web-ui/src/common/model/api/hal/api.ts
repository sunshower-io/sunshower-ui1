import {Copyable} from "common/lib/lang";
import {UUID} from "common/lib/utils/uuid";

export class Provider {
    id          ?: string;
    key         ?: string;
    name        ?: string;
    icon        ?: string;
    description ?: string;
    imageId     ?: string;
}


export class OperatingSystem implements Copyable<OperatingSystem> {

    public readonly id: UUID;

    constructor(public name     ?: string,
                public icon     ?: string,
                public family   ?: string,
                public version  ?: string,
                public provider ?: Provider //test fails with no provider
    ) {
        this.id = UUID.randomUUID();

    }


    copy(): OperatingSystem {
        return new OperatingSystem(
            this.name,
            this.icon,
            this.family,
            this.version
        );
    }
}
export class InstanceDescriptor {
    id              : UUID;
    key             : string;
    name            : string;
    description     : string;

}


export class NodeConfiguration implements Copyable<NodeConfiguration> {

    public instanceCount            : number;
    public memoryProfile            : MemoryProfile;
    public storageProfile           : StorageProfile;
    public computeProfile           : ComputeProfile;
    public instanceDescriptor       : InstanceDescriptor;

    constructor() {
        this.memoryProfile      =   new MemoryProfile();
        this.storageProfile     =   new StorageProfile();
        this.computeProfile     =   new ComputeProfile();
        this.instanceDescriptor =   new InstanceDescriptor();
    }

    copy(): NodeConfiguration {
        let nc = new NodeConfiguration();
        nc.memoryProfile = this.memoryProfile.copy();
        nc.storageProfile = this.storageProfile.copy();
        nc.computeProfile = this.computeProfile.copy();
        return nc;
    }

}

export class MemoryProfile implements Copyable<MemoryProfile> {
    capacity: number;

    copy(): MemoryProfile {
        let mp = new MemoryProfile();
        mp.capacity = this.capacity;
        return mp;
    }
}

export class StorageProfile implements Copyable<StorageProfile> {
    capacity: number;

    copy(): StorageProfile {
        let sp = new StorageProfile();
        sp.capacity = this.capacity;
        return sp;
    }
}

export class ComputeProfile implements Copyable<ComputeProfile> {
    cores: number;

    copy(): ComputeProfile {
        let cp = new ComputeProfile();
        cp.cores = this.cores;
        return cp;
    }
}

