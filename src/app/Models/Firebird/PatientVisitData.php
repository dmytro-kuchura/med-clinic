<?php

namespace App\Models\Firebird;

use Firebird\Eloquent\Model;

/**
 * @property int $VISIT_NR
 * @property int $CATEGORY_NR
 * @property int $ORDERNR
 * @property int $TEMPLATE_NR
 * @property string $DATA
 * @property string $DATECHANGE
 * @property string $PERMISSIONDATA
 */
class PatientVisitData extends Model
{
    /**
     * @var string
     */
    protected $connection = 'firebird';

    /**
     * @var string
     */
    protected $table = 'PATIENTVISITDATA';

    /**
     * @var string
     */
    protected $primaryKey = ['VISIT_NR', 'CATEGORY_NR', 'ORDERNR'];

    /**
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var bool
     */
    public $timestamps = false;
}
